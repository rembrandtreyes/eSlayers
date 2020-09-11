import fetchSummoner from "../../utils/fetchSummoner"

interface SummonerProps {
  name: string
}

const Summoner: React.FC<SummonerProps> = ({ name }) => {
  const summoner = fetchSummoner(name)

  return (
    <>
      <h1>{summoner.name}</h1>
    </>
  )
}

export default Summoner
