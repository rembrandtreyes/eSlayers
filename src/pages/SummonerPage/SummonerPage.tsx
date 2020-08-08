import Summoner from "../../components/Summoner";
import SummonerLeague from "../../components/SummonerLeague";
import fetchTftMatches from "../../utils/fetchTftMatches";
import fetchSummoner from "../../utils/fetchSummoner";

import Match from "../../components/Match";

const SummonerPage = ({ name }) => {
  const summoner = fetchSummoner(name);
  const { matches, isLoading, isError } = fetchTftMatches(summoner.puuid);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <Summoner name={name} />
      <SummonerLeague name={name} />
      {matches.map((match) => (
        <Match key={match} matches={match} />
      ))}
    </div>
  );
};

export default SummonerPage;
