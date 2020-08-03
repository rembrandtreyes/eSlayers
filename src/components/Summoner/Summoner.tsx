import fetchSummoner from "../../utils/fetchSummoner";
import fetchLeague from "../../utils/fetchLeague";
import fetchTftMatches from "../../utils/fetchTftMatches";
import Match from "../Match";

interface SummonerProps {
  name: string;
}

const Summoner: React.FC<SummonerProps> = ({ name }) => {
  const summoner = fetchSummoner(name);
  const league = fetchLeague(summoner.id);
  const { matches, isLoading, isError } = fetchTftMatches(summoner.puuid);

  const winRate = (league[0].wins / league[0].losses) * 100;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  console.log(matches);
  console.log(summoner.puuid);

  return (
    <>
      <h1>{summoner.name}</h1>
      <h2>Tier: {league[0].tier}</h2>
      <h2>Rank: {league[0].rank}</h2>
      <h2>LP: {league[0].leaguePoints}</h2>
      <h2>Wins: {league[0].wins}</h2>
      <h2>Loses: {league[0].losses}</h2>
      <h2>Win Rate: {winRate.toFixed(2)}%</h2>
      {matches.map((match) => (
        <Match key={match} matches={match} />
      ))}
    </>
  );
};

export default Summoner;
