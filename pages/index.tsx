import Router from "next/router";
import { useState } from "react";

const Home: React.FC = () => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    Router.push({
      pathname: "/summoner",
      query: { name: input }
    })
  }

  return (
    <div>
      <div>TFT Stats Site</div>
      <div>Search your summoner name</div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <br />
    </div>
  );
};

export default Home;
