import useSWR from "swr"

import fetcher from "./fetcher"

const fetchTftChallenger = () => {
  const { data, error } = useSWR(
    `na1/tft/league/v1/challenger?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    fetcher
  )

  return {
    challengerData: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default fetchTftChallenger
