"use client";

import { useState, useEffect } from "react";

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

interface GitHubContributionsData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

interface UseGitHubContributionsReturn {
  data: GitHubContributionsData | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useGitHubContributions(
  username: string
): UseGitHubContributionsReturn {
  const [data, setData] = useState<GitHubContributionsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContributions = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `/api/github/contributions?username=${encodeURIComponent(username)}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch contributions");
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error("Error fetching GitHub contributions:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      fetchContributions();
    }
  }, [username]);

  return {
    data,
    loading,
    error,
    refetch: fetchContributions,
  };
}
