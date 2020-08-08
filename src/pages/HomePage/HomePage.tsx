import Router from "next/router";
import { useState } from "react";

import ChallengerLeague from "../../components/ChallengerLeague"

const HomePage = () => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    Router.push({
      pathname: "/summoner",
      query: { name: input },
    });
  };

  return (
    <div>
      <div>
        <img
          src="https://res.cloudinary.com/rreyes/image/upload/v1596840707/6bca6cc9-800b-4c8b-a12a-6c38bd1acccd_200x200_f8evcp.png"
          width="200"
        />
      </div>
      <div>Search your summoner name</div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <ChallengerLeague />
    </div>
  );
}

export default HomePage