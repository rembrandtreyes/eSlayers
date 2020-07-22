import useSWR from "swr";

import fetcher from "./fetcher"

const fetchSummoner = (name: string) => {
  const { data: summoner, error } = useSWR(name ? `/api/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.NEXT_PUBLIC_API_KEY}` : null, fetcher);

  if (!summoner) return 'Loading...';
  if (error) return 'Error loading';

  return summoner
}

export default fetchSummoner