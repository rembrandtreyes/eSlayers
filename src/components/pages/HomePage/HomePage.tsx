import Router from "next/router"
import { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import colors from "theme/colors"
import ChallengerLeague from "components/ChallengerLeague"

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
      <HomeForm onSubmit={handleSubmit}>
        <SearchLabel htmlFor="Search">
          <SearchText>Search Your Username</SearchText>
          <SearchInput
            placeholder="Username"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </SearchLabel>
        <SearchButton type="submit">
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </SearchButton>
      </HomeForm>
      <ChallengerLeague />
    </HomePageWrapper>
  )
}

export const Title = styled.h1`
  font-family: "Geostar Fill", cursive !important;
  line-height: 1.5;
  margin-bottom: 64px;
  text-align: center;
`

export const HomePageWrapper = styled.div`
  margin: 112px 60px;
`

export const HomeForm = styled.form`
  width: fit-content;
  margin: 112px auto;
  padding: 32px 60px;
  border-radius: 24px;
  background-color: ${colors.brandPrimary};
  position: relative;
`

export const SearchLabel = styled.label`
  display: flex;
  flex-direction: column;
`

export const SearchText = styled.h2`
  margin-bottom: 16px;
`

export const SearchInput = styled.input`
  padding: 16px;
  font-size: 1.254rem;
  color: ${colors.brandAccentPrimary};

  &:focus {
    outline: none;
  }
`

export const SearchButton = styled.button`
  position: absolute;
  right: 60px;
  bottom: 33px;
  padding: 15px;
  border: none;
  background: #ffffff;

  svg {
    color: #1e2759;
  }
`

export default HomePage
