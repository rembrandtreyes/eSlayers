import { fetchSummonerPuuid } from "utils/fetchSummoner"

interface ParticipantProps {
  puuid: string
}

const Participant: React.FC<ParticipantProps> = ({ puuid }) => {
  const { summonerPuuid, isError, isLoading } = fetchSummonerPuuid(puuid)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error fetching participant</p>

  return <div>{summonerPuuid.name}</div>
}

export default Participant
