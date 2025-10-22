import { type NextRequest, NextResponse } from "next/server";

interface ContributionDay {
  date: string;
  contributionCount: number;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

interface GitHubError {
  type?: string;
  path?: string[];
  message?: string;
}

const CONTRIBUTIONS_QUERY = `
  query($userName:String!, $from:DateTime!, $to:DateTime!) {
    user(login: $userName) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

const VIEWER_CONTRIBUTIONS_QUERY = `
  query($from:DateTime!, $to:DateTime!) {
    viewer {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

// Note: GitHub's GraphQL API includes private contributions by default when querying the authenticated viewer

function generateDemoContributions() {
  const weeks: ContributionWeek[] = [];
  const today = new Date();

  for (let weekIndex = 0; weekIndex < 53; weekIndex++) {
    const week = {
      contributionDays: [] as ContributionDay[],
    };

    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      const date = new Date(today);
      date.setDate(date.getDate() - ((52 - weekIndex) * 7 + (6 - dayIndex)));

      const randomCount = Math.floor(Math.random() * 15);
      let level:
        | "NONE"
        | "FIRST_QUARTILE"
        | "SECOND_QUARTILE"
        | "THIRD_QUARTILE"
        | "FOURTH_QUARTILE" = "NONE";

      if (randomCount > 10) level = "FOURTH_QUARTILE";
      else if (randomCount > 7) level = "THIRD_QUARTILE";
      else if (randomCount > 4) level = "SECOND_QUARTILE";
      else if (randomCount > 0) level = "FIRST_QUARTILE";

      week.contributionDays.push({
        date: date.toISOString().split("T")[0],
        contributionCount: randomCount,
        contributionLevel: level,
      });
    }

    weeks.push(week);
  }

  return weeks;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  // Calculer la plage de dates (365 derniers jours, comme le graphe GitHub)
  const to = new Date();
  const from = new Date();
  from.setFullYear(from.getFullYear() - 1);
  from.setDate(from.getDate() + 1); // Exactement 365 jours

  try {
    // Essayer d'utiliser GITHUB_TOKEN depuis l'environnement, mais facultatif
    const token =
      process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    // Ajouter uniquement l'en-tête Authorization si le token existe
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    // Use viewer query if token is available to get private contributions
    const useViewerQuery = !!token;
    const query = useViewerQuery
      ? VIEWER_CONTRIBUTIONS_QUERY
      : CONTRIBUTIONS_QUERY;
    const variables = useViewerQuery
      ? {
          from: from.toISOString(),
          to: to.toISOString(),
        }
      : {
          userName: username,
          from: from.toISOString(),
          to: to.toISOString(),
        };

    const response = await fetch(GITHUB_GRAPHQL_API, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
      // Désactiver le cache pour toujours avoir les données à jour
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `GitHub API a répondu avec le statut: ${response.status}`
      );
    }

    const data = await response.json();

    if (data.errors) {
      console.error("Erreurs GitHub API:", data.errors);

      // Check if it's specifically a user not found error
      const isUserNotFound = data.errors.some(
        (error: GitHubError) =>
          error.type === "NOT_FOUND" &&
          error.path?.includes("user") &&
          !error.message?.toLowerCase().includes("api rate limit")
      );

      // Check if it's an authentication error
      const isAuthError = data.errors.some(
        (error: GitHubError) =>
          error.message?.toLowerCase().includes("unauthorized") ||
          error.message?.toLowerCase().includes("forbidden") ||
          error.message?.toLowerCase().includes("bad credentials")
      );

      if (isUserNotFound && !isAuthError) {
        // Return demo data ONLY for user not found
        console.warn(`User ${username} not found, returning demo data`);
        return NextResponse.json({
          totalContributions: 847,
          weeks: generateDemoContributions(),
          isDemoMode: true,
        });
      }

      return NextResponse.json(
        {
          error: "Échec de la récupération des données GitHub",
          details: data.errors,
        },
        { status: 500 }
      );
    }

    const contributionsData =
      data.data?.viewer?.contributionsCollection?.contributionCalendar ||
      data.data?.user?.contributionsCollection?.contributionCalendar;

    if (!contributionsData) {
      return NextResponse.json(
        {
          error:
            "Utilisateur non trouvé ou aucune donnée de contribution disponible",
        },
        { status: 404 }
      );
    }

    // Log pour debug
    console.log(`Contributions récupérées pour ${username}:`, {
      total: contributionsData.totalContributions,
      from: from.toISOString().split("T")[0],
      to: to.toISOString().split("T")[0],
      source: data.data?.viewer ? "viewer (authentifié)" : "user (public)",
    });

    return NextResponse.json({
      totalContributions: contributionsData.totalContributions,
      weeks: contributionsData.weeks,
    });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des contributions GitHub:",
      error
    );
    return NextResponse.json(
      {
        error: "Échec de la récupération des contributions",
        message: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
