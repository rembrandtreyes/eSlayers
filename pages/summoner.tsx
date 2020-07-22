import { useRouter } from "next/router";
import Summoner from "../src/components/Summoner";

const UserInfoPage: React.FC = () => {

  const router = useRouter();

  return (
    <div>
      <Summoner name={router.query.name} />
    </div>
  );
};

export default UserInfoPage;
