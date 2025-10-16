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
}

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

const REPOSITORIES_QUERY = `
  query($userName: String!) {
    user(login: $userName) {
      repositories(
        first: 10
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

    // Transform the data to match our needs
    const transformedRepos = repositories.map((repo: Repository) => {
      const pushedDate = new Date(repo.pushedAt);
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
      };
    });

    return NextResponse.json({
      repositories: transformedRepos.slice(0, 8), // Limit to 8 most recent
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
