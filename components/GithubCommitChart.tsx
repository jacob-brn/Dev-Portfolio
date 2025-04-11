"use client";
import { siteConfig } from "@/config/config";
import GitHubCalendar from "react-github-calendar";

type DayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

type Activity = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

const selectLastHalfYear = (data: Activity[]) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return data.filter((activity: Activity) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const getCurrentDayOfWeek = (): DayIndex => new Date().getDay() as DayIndex;

const GithubCommitChart = () => {
  return (
    <div className="relative border-y p-6 flex items-center justify-center flex-row gap-0 overflow-hidden gap-x-1">
      <div className="absolute top-0 left-0 w-2/5 h-full bg-gradient-to-l from-transparent to-background" />
      <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-r from-transparent to-background" />
      <GitHubCalendar
        username={siteConfig.githubUsername}
        hideTotalCount
        hideColorLegend
        hideMonthLabels
        transformData={selectLastHalfYear}
        colorScheme="light"
        blockMargin={5}
        weekStart={(getCurrentDayOfWeek() + 1) as DayIndex}
        blockSize={20}
        theme={{
          light: [
            "#ebedf0", // Level 0 – No activity
            "#90cdf4", // Level 1 – Low
            "#63b3ed", // Level 2 – Medium
            "#4299e1", // Level 3 – High
            "#3182ce",
          ],
        }}
      />
      <GitHubCalendar
        username={siteConfig.githubUsername}
        hideTotalCount
        hideColorLegend
        hideMonthLabels
        transformData={selectLastHalfYear}
        colorScheme="light"
        blockMargin={5}
        blockSize={20}
        weekStart={3}
        theme={{
          light: [
            "#ebedf0", // Level 0 – No activity
            "#90cdf4", // Level 1 – Low
            "#63b3ed", // Level 2 – Medium
            "#4299e1", // Level 3 – High
            "#3182ce",
          ],
        }}
      />
    </div>
  );
};

export default GithubCommitChart;
