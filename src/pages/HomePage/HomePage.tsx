import Router from "next/router"
import { useState } from "react"
import styled from "styled-components"

import ChallengerLeague from "../../components/ChallengerLeague"

const HomePage = () => {
  const [input, setInput] = useState("")

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    Router.push({
      pathname: "/summoner",
      query: { name: input },
    })
  }

  return (
    <HomePageWrapper>
      <Title>eSlayers</Title>
      <form onSubmit={handleSubmit}>
        <label>
          <h2>Search your username</h2>
          <input
            placeholder="Username"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        {/* <input type="submit" value="Submit" /> */}
        <button type="submit">Test</button>
      </form>
      <ChallengerLeague />
    </HomePageWrapper>
  )
}

export const Title = styled.h1`
  font-family: "Geostar Fill", cursive !important;
  line-height: 1.5;
  margin-bottom: 64px;
`

export const HomePageWrapper = styled.div`
  margin: 112px 60px;
`

export const HomeForm = styled.form`
  width: fit-content;
`

export default HomePage
