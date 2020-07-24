import fetchTftMatch from "../../utils/fetchTftMatch";
import Participant from "../Participant";

const Match = ({ matches }) => {
  const { match, isLoading, isError } = fetchTftMatch(matches);

  if (isLoading) return <p>Loading Match</p>;
  if (isError) return <p>Error loading match</p>;

  const info = match.info;
  const unixToDate = new Date(info.game_datetime * 1000);
  const humanDate = unixToDate.toLocaleString();
  const participants = info.participants;

  return (
    <div>
      <p>{humanDate}</p>
      {participants.map((participant) => (
        <Participant key={participant.puuidz} puuid={participant.puuid} />
      ))}
    </div>
  );
};

export default Match;
