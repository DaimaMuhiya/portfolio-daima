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

// interface ContributionWeek {
//   contributionDays: ContributionDay[];
// }

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

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

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  // Calculer la plage de dates (365 derniers jours)
  const to = new Date();
  const from = new Date();
  from.setFullYear(from.getFullYear() - 1);

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

    const response = await fetch(GITHUB_GRAPHQL_API, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query: CONTRIBUTIONS_QUERY,
        variables: {
          userName: username,
          from: from.toISOString(),
          to: to.toISOString(),
        },
      }),
      // Cache pour 1 heure
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`GitHub API a répondu avec le statut: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      console.error("Erreurs GitHub API:", data.errors);
      return NextResponse.json(
        { error: "Échec de la récupération des données GitHub", details: data.errors },
        { status: 500 }
      );
    }

    const contributionsData =
      data.data?.user?.contributionsCollection?.contributionCalendar;

    if (!contributionsData) {
      return NextResponse.json(
        { error: "Utilisateur non trouvé ou aucune donnée de contribution disponible" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      totalContributions: contributionsData.totalContributions,
      weeks: contributionsData.weeks,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des contributions GitHub:", error);
    return NextResponse.json(
      {
        error: "Échec de la récupération des contributions",
        message: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
