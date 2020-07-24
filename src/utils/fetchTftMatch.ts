import useSWR from "swr";

import fetcher from "./fetcher";

const fetchTftMatch = (matchId: string) => {
  const { data, error } = useSWR(
    matchId ? `/americas/tft/match/v1/matches/${matchId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}` : null,
    fetcher
  );

  return {
    match: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default fetchTftMatch;
