import fetchLeague from "utils/fetchLeague"
import fetchSummoner from "utils/fetchSummoner"

const SummonerLeague = ({ name }) => {
  const summoner = fetchSummoner(name)
  const league = fetchLeague(summoner.id)
  const winRate = (league[0].wins / league[0].losses) * 100

  return (
    <div>
      <h2>Tier: {league[0].tier}</h2>
      <h2>Rank: {league[0].rank}</h2>
      <h2>LP: {league[0].leaguePoints}</h2>
      <h2>Wins: {league[0].wins}</h2>
      <h2>Loses: {league[0].losses}</h2>
      <h2>Win Rate: {winRate.toFixed(2)}%</h2>
    </div>
  )
}

export default SummonerLeague
