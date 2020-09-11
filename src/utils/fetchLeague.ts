import useSWR from "swr"

import fetcher from "./fetcher"

const fetchLeague = (summonerId: number) => {
  const { data: league, error } = useSWR(
    summonerId
      ? `/na1/tft/league/v1/entries/by-summoner/${summonerId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      : null,
    fetcher
  )

  if (!league) return "Loading..."
  if (error) return "Error loading"

  return league
}

export default fetchLeague
