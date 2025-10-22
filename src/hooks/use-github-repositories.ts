"use client";

import { useState, useEffect, useCallback } from "react";

interface Repository {
  name: string;
  url: string;
  date: string;
  fullDate: string;
  description: string | null;
  stars: number;
  language: string;
  languageColor: string;
  commitMessage: string;
  commitDate: string;
}

interface UseGitHubRepositoriesReturn {
  repositories: Repository[];
  loading: boolean;
  error: string | null;
  isDemoMode: boolean;
  refetch: () => void;
}

export function useGitHubRepositories(
  username: string
): UseGitHubRepositoriesReturn {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDemoMode, setIsDemoMode] = useState(false);

  const fetchRepositories = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `/api/github/repositories?username=${encodeURIComponent(username)}`
      );

      if (!response.ok) {
        let errorMessage = "Failed to fetch repositories";
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch {
          // If JSON parsing fails, use default error message
        }
        throw new Error(errorMessage);
      }

      const result = await response.json();
      setRepositories(result.repositories);
      setIsDemoMode(result.isDemoMode || false);
    } catch (err) {
      console.error("Error fetching GitHub repositories:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    if (username) {
      fetchRepositories();
    }
  }, [username, fetchRepositories]);

  return {
    repositories,
    loading,
    error,
    isDemoMode,
    refetch: fetchRepositories,
  };
}
