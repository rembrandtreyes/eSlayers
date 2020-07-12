import { useRouter } from "next/router";
import useSWR from "swr";
import fetch from "unfetch";

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

const useSummoner = () => {
  const router = useRouter();

  const summonerQuery = `/api/lol/summoner/v4/summoners/by-name/${router.query.name}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const { data, error } = useSWR(() => summonerQuery, fetcher);

  return {
    summoner: data,
    summonerLoading: !error && !data,
    summonerError: error,
  };
};

const useLeague = (accountId) => {

  const leagueQuery = `/api/tft/league/v1/entries/by-summoner/${accountId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const { data, error } = useSWR(() => leagueQuery, fetcher)

  return {
    league: data,
    leagueLoading: !error && !data,
    leagueError: error,
  };
}

const UserInfoPage: React.FC = () => {

  const { summoner, summonerLoading, summonerError } = useSummoner();
  const { league, leagueLoading, leagueError } = useLeague(summoner.id)
  if (summonerLoading && leagueLoading) return <div>Failed to load</div>;
  if (summonerError && leagueError) return <div>Loading...</div>;

  const winRate = (league[0].wins / league[0].losses) * 100;

  return (
    <div>
      <h1>{summoner.name}</h1>
      <h2>Tier: {league[0].tier}</h2>
      <h2>Rank: {league[0].rank}</h2>
      <h2>LP: {league[0].leaguePoints}</h2>
      <h2>Wins: {league[0].wins}</h2>
      <h2>Loses: {league[0].losses}</h2>
      <h2>Win Rate: {winRate.toFixed(2)}%</h2>

      {console.log(league[0].rank)}
    </div>
  );
};

export default UserInfoPage;
