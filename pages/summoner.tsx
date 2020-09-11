import { useRouter } from "next/router"
import SummonerPage from "components/pages/SummonerPage"

const Summoner: React.FC = () => {
  const router = useRouter()
  const { name } = router.query as { name: string }

  return (
    <>
      <SummonerPage name={name} />
    </>
  )
}

export default Summoner
