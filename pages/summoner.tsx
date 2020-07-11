import { useRouter } from "next/router";
import useSWR from "swr";
import fetch from "unfetch";


const UserInfoPage: React.FC = () => {
  const router = useRouter();
  const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

  const queryString = `/api/lol/summoner/v4/summoners/by-name/${router.query.name}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const { data, error } = useSWR(() => queryString, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
};

export default UserInfoPage;
