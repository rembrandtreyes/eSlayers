import { useState, useEffect } from "react";
import useSWR from "swr";
import fetch from "unfetch";

const Home: React.FC = () => {
  const [input, setInput] = useState("");

  const fetcher = (url: RequestInfo) => fetch(url).then((r) => r.json());

  const useMounted = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return mounted;
  };
  const queryString = `/api/lol/summoner/v4/summoners/by-name/rjeezy?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const mounted = useMounted();

  const { data, error } = useSWR(() => (mounted ? queryString : null), fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <div>TFT Stats Site</div>
      <div>Search your summoner name</div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Submit</button>
      <br />
      <h1>{data.name}</h1>
    </div>
  );
};

export default Home;
