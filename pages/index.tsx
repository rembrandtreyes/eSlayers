import Router from "next/router";
import { useState } from "react";

import fetchTftChallenger from "../src/utils/fetchTftChallenger";

const Home: React.FC = () => {
  const [input, setInput] = useState("");
  const { challengerData, isError, isLoading } = fetchTftChallenger();

  const handleSubmit = () => {
    Router.push({
      pathname: "/summoner",
      query: { name: input },
    });
  };

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      <div>TFT Stats Site</div>
      <div>Search your summoner name</div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {console.log(challengerData)}
      <h2>{challengerData.tier}</h2>
      {challengerData.entries.sort((a, b) => b.leaguePoints - a.leaguePoints).slice(0, 20).map((entry, index) => (
        <div key={entry.summonerId}>
          <p>{index + 1}) Name: {entry.summonerName}</p>
          <span>LP: {entry.leaguePoints}</span> | <span>Wins: {entry.wins}</span> | <span>Loses: {entry.losses}</span> | <span>Veteran: {entry.veteran ? "Yes" : "No"}</span>
        </div>
      ))}
      <br />
    </div>
  );
};

export default Home;
