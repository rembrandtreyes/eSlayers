import { useRouter } from "next/router";
import Summoner from "../src/components/Summoner";

const UserInfoPage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query as { name: string };

  return (
    <div>
      <Summoner name={name} />
    </div>
  );
};

export default UserInfoPage;
