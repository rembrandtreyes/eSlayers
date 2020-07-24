import useSWR from "swr";

import fetcher from "./fetcher";

const fetchTftMatches = (puuid: string) => {
  const { data: matches, error } = useSWR(() =>
    puuid
      ? `/americas/tft/match/v1/matches/by-puuid/${puuid}/ids?count=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      : null,
    fetcher
  );

  if (!matches) return "Loading...";
  if (error) return "Error fetching matches";

  return matches;
};

export default fetchTftMatches;
