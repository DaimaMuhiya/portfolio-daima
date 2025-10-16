"use client";

import type React from "react";

import { useState } from "react";
import { useGitHubContributions } from "@/hooks/use-github-contributions";
import { Loader2, RefreshCw } from "lucide-react";

interface GitHubContributionsProps {
  username: string;
}

const LEVEL_COLORS = {
  NONE: "#0D0D0D",
  FIRST_QUARTILE: "#0E4429",
  SECOND_QUARTILE: "#006D32",
  THIRD_QUARTILE: "#26A641",
  FOURTH_QUARTILE: "#39D353",
};

export function GitHubContributions({ username }: GitHubContributionsProps) {
  const { data, loading, error, refetch } = useGitHubContributions(username);
  const [hoveredDay, setHoveredDay] = useState<{
    date: string;
    count: number;
    x: number;
    y: number;
  } | null>(null);

  const handleMouseEnter = (
    date: string,
    count: number,
    event: React.MouseEvent
  ) => {
    setHoveredDay({
      date,
      count,
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredDay) {
      setHoveredDay({
        ...hoveredDay,
        x: event.clientX,
        y: event.clientY,
      });
    }
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  if (loading) {
    return (
      <div className="bg-[#121212] border border-[#1F2228] rounded-xl p-6 flex items-center justify-center min-h-[200px]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-[#057A55] animate-spin" />
          <p className="text-[#6B7280] text-sm font-mono">
            Chargement des contributions GitHub...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#121212] border border-[#1F2228] rounded-xl p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-[#F98080] text-sm font-mono">
            Erreur lors du chargement des contributions
          </p>
          <p className="text-[#6B7280] text-xs font-mono max-w-md">{error}</p>
          <button
            onClick={refetch}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#057A55] hover:bg-[#046545] text-white font-mono rounded-lg transition-colors text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  if (!data || !data.weeks || data.weeks.length === 0) {
    return (
      <div className="bg-[#121212] border border-[#1F2228] rounded-xl p-6">
        <p className="text-[#6B7280] text-sm font-mono text-center">
          Aucune donnée de contribution disponible
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#121212] border border-[#1F2228] rounded-xl p-6 overflow-x-auto">
      <div className="min-w-[800px]">
        {/* Badge du total des contributions */}
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-[#057A55] bg-opacity-20 border border-[#057A55] rounded-lg">
          <span className="text-white text-sm font-mono font-medium">
            {data.totalContributions}
          </span>
          <span className="text-white text-xs font-mono">
            contributions cette année_
          </span>
        </div>

        {/* Labels des mois */}
        <div className="flex gap-[3px] mb-2 ml-8">
          {months.map((month) => (
            <div
              key={month}
              className="text-[10px] text-[#6B7280] font-mono"
              style={{ width: `${100 / 12}%` }}
            >
              {month}
            </div>
          ))}
        </div>

        <div className="flex gap-[3px]">
          {/* Labels des jours */}
          <div className="flex flex-col gap-[3px] pr-2">
            {days.map((day, i) => (
              <div
                key={day}
                className="text-[9px] text-[#6B7280] font-mono h-[10px] flex items-center"
                style={{ visibility: i % 2 === 1 ? "visible" : "hidden" }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Grille de contribution */}
          <div className="flex gap-[3px]" onMouseMove={handleMouseMove}>
            {data.weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3px]">
                {week.contributionDays.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className="w-[10px] h-[10px] rounded-[2px] cursor-pointer transition-all hover:ring-1 hover:ring-white"
                    style={{
                      backgroundColor: LEVEL_COLORS[day.contributionLevel],
                    }}
                    onMouseEnter={(e) =>
                      handleMouseEnter(day.date, day.contributionCount, e)
                    }
                    onMouseLeave={() => setHoveredDay(null)}
                    title={`${
                      day.contributionCount
                    } contributions le ${new Date(day.date).toLocaleDateString(
                      "fr-FR"
                    )}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legende */}
        <div className="flex items-center justify-end gap-2 mt-4">
          <span className="text-[10px] text-[#6B7280] font-mono">Moins</span>
          {Object.entries(LEVEL_COLORS).map(([level, color]) => (
            <div
              key={level}
              className="w-[10px] h-[10px] rounded-[2px]"
              style={{ backgroundColor: color }}
            />
          ))}
          <span className="text-[10px] text-[#6B7280] font-mono">Plus</span>
        </div>
      </div>

      {/* Infobulle */}
      {hoveredDay && (
        <div
          className="fixed z-50 bg-[#0D0D0D] border border-[#1F2A37] rounded-lg px-3 py-2 pointer-events-none shadow-xl"
          style={{
            left: `${hoveredDay.x + 10}px`,
            top: `${hoveredDay.y + 10}px`,
          }}
        >
          <div className="text-white text-xs font-mono mb-1">
            {hoveredDay.count}{" "}
            {hoveredDay.count === 1 ? "contribution" : "contributions"}
          </div>
          <div className="text-[#6B7280] text-[10px] font-mono">
            {new Date(hoveredDay.date).toLocaleDateString("fr-FR", {
              weekday: "short",
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
      )}
    </div>
  );
}
