import fetchTftChallenger from "../../utils/fetchTftChallenger";

const ChallengerLeague = () => {
  const { challengerData, isError, isLoading } = fetchTftChallenger();

  if (isLoading) return <div>Loading Challenger League...</div>;

  return (
    <>
      {console.log(challengerData)}
      <h2>{challengerData.tier}</h2>
      {challengerData.entries
        .sort((a: { leaguePoints: number }, b: { leaguePoints: number }) => b.leaguePoints - a.leaguePoints)
        .slice(0, 20)
        .map(
          (
            entry: {
              summonerId: React.Key;
              summonerName: React.ReactNode;
              leaguePoints: React.ReactNode;
              wins: React.ReactNode;
              losses: React.ReactNode;
              veteran: boolean;
            },
            index: number
          ) => (
            <div key={entry.summonerId}>
              <p>
                {index + 1}) Name: {entry.summonerName}
              </p>
              <span>LP: {entry.leaguePoints}</span> | <span>Wins: {entry.wins}</span> |{" "}
              <span>Loses: {entry.losses}</span> | <span>Veteran: {entry.veteran ? "Yes" : "No"}</span>
            </div>
          )
        )}
    </>
  );
};

export default ChallengerLeague;
