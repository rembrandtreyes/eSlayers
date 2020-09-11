import styled from "styled-components"

import fetchTftChallenger from "../../utils/fetchTftChallenger"

const ChallengerLeague: React.FC = () => {
  const { challengerData, isError, isLoading } = fetchTftChallenger()

  if (isLoading) return <div>Loading Challenger League...</div>
  if (isError) return <div>Could not retrieve the top 100 list of players</div>

  return (
    <>
      {console.log(challengerData)}
      <h3>{challengerData.tier}</h3>
      {challengerData.entries
        .sort(
          (a: { leaguePoints: number }, b: { leaguePoints: number }) =>
            b.leaguePoints - a.leaguePoints
        )
        .slice(0, 20)
        .map(
          (
            entry: {
              summonerId: React.Key
              summonerName: React.ReactNode
              leaguePoints: React.ReactNode
              wins: React.ReactNode
              losses: React.ReactNode
              veteran: boolean
            },
            index: number
          ) => (
            <ChallengerContainer key={entry.summonerId}>
              <p>
                {index + 1}) Name: {entry.summonerName}
              </p>
              <span>LP: {entry.leaguePoints}</span> |{" "}
              <span>Wins: {entry.wins}</span> |{" "}
              <span>Loses: {entry.losses}</span> |{" "}
              <span>Veteran: {entry.veteran ? "Yes" : "No"}</span>
            </ChallengerContainer>
          )
        )}
    </>
  )
}

export const ChallengerContainer = styled.div`
  width: 800px;
  height: 200px;
  margin: 0 auto;
  background-color: #e3e3e3;
`

export default ChallengerLeague
