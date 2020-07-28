import fetchTftMatch from "../../utils/fetchTftMatch";
import Participant from "../Participant";

interface MatchProps {
  matches: string;
}

const Match: React.FC<MatchProps> = ({ matches }) => {
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
        <>
          <Participant key={participant.puuid} puuid={participant.puuid} />
          <p>Placement: {participant.placement}</p>
        </>
      ))}
    </div>
  );
};

export default Match;
