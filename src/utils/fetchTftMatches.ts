import useSWR from "swr"

import fetcher from "./fetcher"

const fetchTftMatches = (puuid: string) => {
  const { data, error } = useSWR(
    puuid
      ? `/americas/tft/match/v1/matches/by-puuid/${puuid}/ids?count=2&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      : null,
    fetcher
  )

  return {
    matches: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default fetchTftMatches
