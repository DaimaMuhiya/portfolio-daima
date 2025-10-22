import { type NextRequest, NextResponse } from "next/server";

interface Repository {
  name: string;
  url: string;
  pushedAt: string;
  description: string | null;
  stargazerCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
  defaultBranchRef: {
    target: {
      history: {
        edges: Array<{
          node: {
            message: string;
            committedDate: string;
          };
        }>;
      };
    };
  } | null;
}

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

interface GitHubError {
  type?: string;
  path?: string[];
  message?: string;
}

const REPOSITORIES_QUERY = `
  query($userName: String!, $limit: Int!) {
    user(login: $userName) {
      repositories(
        first: $limit
        orderBy: { field: PUSHED_AT, direction: DESC }
        privacy: PUBLIC
      ) {
        nodes {
          name
          url
          pushedAt
          description
          stargazerCount
          primaryLanguage {
            name
            color
          }
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 1) {
                  edges {
                    node {
                      message
                      committedDate
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

function generateDemoRepositories(count: number) {
  const languages = [
    { name: "TypeScript", color: "#3178c6" },
    { name: "JavaScript", color: "#f1e05a" },
    { name: "Python", color: "#3572A5" },
    { name: "React", color: "#61dafb" },
    { name: "Vue", color: "#42b883" },
    { name: "HTML", color: "#e34c26" },
    { name: "CSS", color: "#563d7c" },
  ];

  const projectNames = [
    "portfolio-website",
    "e-commerce-platform",
    "task-manager-app",
    "weather-dashboard",
    "blog-cms",
    "chat-application",
    "fitness-tracker",
    "recipe-finder",
    "expense-tracker",
    "music-player",
    "todo-list-app",
    "social-media-dashboard",
    "booking-system",
    "inventory-manager",
    "learning-platform",
  ];

  const commitMessages = [
    "feat: add user authentication",
    "fix: resolve navigation bug",
    "docs: update README",
    "style: improve responsive design",
    "refactor: optimize database queries",
    "feat: implement dark mode",
    "fix: correct API endpoint",
    "chore: update dependencies",
    "feat: add search functionality",
    "perf: improve loading speed",
  ];

  const descriptions = [
    "Un site portfolio moderne avec animations fluides",
    "Plateforme e-commerce complète avec paiement intégré",
    "Application de gestion de tâches collaborative",
    "Tableau de bord météo avec API temps réel",
    "Système de gestion de contenu pour blogs",
    "Application de chat en temps réel avec WebSocket",
    "Suivi de fitness avec statistiques détaillées",
    "Recherche de recettes avec filtres avancés",
    "Gestionnaire de dépenses avec graphiques",
    "Lecteur de musique avec playlist personnalisée",
  ];

  const repos = [];
  const now = new Date();

  for (let i = 0; i < Math.min(count, projectNames.length); i++) {
    const lang = languages[Math.floor(Math.random() * languages.length)];
    const daysAgo = Math.floor(Math.random() * 365);
    const pushedDate = new Date(now);
    pushedDate.setDate(pushedDate.getDate() - daysAgo);

    repos.push({
      name: projectNames[i],
      url: `https://github.com/demo/${projectNames[i]}`,
      date: pushedDate.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "short",
      }),
      fullDate: pushedDate.toISOString(),
      description: descriptions[i % descriptions.length],
      stars: Math.floor(Math.random() * 50),
      language: lang.name,
      languageColor: lang.color,
      commitMessage: commitMessages[i % commitMessages.length],
      commitDate: pushedDate.toISOString(),
    });
  }

  return repos.sort(
    (a, b) => new Date(b.fullDate).getTime() - new Date(a.fullDate).getTime()
  );
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const username = searchParams.get("username");
  const limitParam = searchParams.get("limit");
  const limit = limitParam ? Number.parseInt(limitParam, 10) : 10;

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  try {
    const token =
      process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(GITHUB_GRAPHQL_API, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query: REPOSITORIES_QUERY,
        variables: {
          userName: username,
          limit: Math.min(limit, 100),
        },
      }),
      // Cache for 30 minutes
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      console.error("GitHub API errors:", data.errors);

      // Vérifiez s'il s'agit d'une erreur « utilisateur introuvable ».
      const isUserNotFound = data.errors.some(
        (error: GitHubError) =>
          error.type === "NOT_FOUND" && error.path?.includes("user")
      );

      if (isUserNotFound) {
        // Renvoyer les données de démonstration au lieu d'une erreur
        return NextResponse.json({
          repositories: generateDemoRepositories(limit),
          isDemoMode: true,
        });
      }

      return NextResponse.json(
        { error: "Failed to fetch GitHub data", details: data.errors },
        { status: 500 }
      );
    }

    const repositories = data.data?.user?.repositories?.nodes;

    if (!repositories) {
      return NextResponse.json(
        { error: "User not found or no repositories available" },
        { status: 404 }
      );
    }

    // Transformez les données pour qu'elles correspondent à nos besoins.
    const transformedRepos = repositories.map((repo: Repository) => {
      const pushedDate = new Date(repo.pushedAt);
      const commitMessage =
        repo.defaultBranchRef?.target?.history?.edges?.[0]?.node?.message ||
        "No commit message available";
      const commitDate =
        repo.defaultBranchRef?.target?.history?.edges?.[0]?.node
          ?.committedDate || repo.pushedAt;

      return {
        name: repo.name,
        url: repo.url,
        date: pushedDate.toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "short",
        }),
        fullDate: repo.pushedAt,
        description: repo.description,
        stars: repo.stargazerCount,
        language: repo.primaryLanguage?.name || "Unknown",
        languageColor: repo.primaryLanguage?.color || "#6B7280",
        commitMessage: commitMessage.split("\n")[0], // Obtenir la première ligne du message de validation
        commitDate: commitDate,
      };
    });

    return NextResponse.json({
      repositories: transformedRepos,
    });
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch repositories",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
