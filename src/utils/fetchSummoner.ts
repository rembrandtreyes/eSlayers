import useSWR from "swr"

import fetcher from "./fetcher"

const fetchSummoner = (name: string) => {
  const { data: summoner, error } = useSWR(
    name
      ? `/na1/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      : null,
    fetcher
  )

  if (!summoner) return "Loading..."
  if (error) return "Error loading"

  return summoner
}

export const fetchSummonerPuuid = (puuid: string) => {
  const { data, error } = useSWR(
    puuid
      ? `/na1/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      : null,
    fetcher
  )

  return {
    summonerPuuid: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default fetchSummoner
