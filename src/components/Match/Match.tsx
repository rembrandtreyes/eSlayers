import React from "react"

import fetchTftMatch from "utils/fetchTftMatch"
import Participant from "components/Participant"

interface MatchProps {
  matches: string
}

const Match: React.FC<MatchProps> = ({ matches }) => {
  const { match, isLoading, isError } = fetchTftMatch(matches)

  if (isLoading) return <p>Loading Match</p>
  if (isError) return <p>Error loading match</p>

  const info = match.info
  const unixToDate = new Date(info.game_datetime * 1000)
  const humanDate = unixToDate.toLocaleString()
  const participants = info.participants
  console.log(participants)

  return (
    <div>
      <p>{humanDate}</p>
      {participants.map((participant) => (
        <React.Fragment key={participant.puuid}>
          <h4>
            <Participant puuid={participant.puuid} />
          </h4>
          <p>Placement: {participant.placement}</p>
          <p>Gold Left: {participant.gold_left}</p>
          <p>Level: {participant.level}</p>
          <p>Players Eliminated: {participant.players_eliminated}</p>
          <h5>Traits</h5>
          {participant.traits.map((trait) => (
            <div key={trait.name}>
              <span>Trait Name: {trait.name}</span> |{" "}
              <span>Number of units: {trait.num_units}</span> |{" "}
              <span>Tier Style: {trait.style}</span> |{" "}
              <span>Tier of trait: {trait.tier_current}</span>
            </div>
          ))}
          <h5>Units</h5>
          {participant.units.map((unit) => (
            <div key={unit.character_id}>
              <span>Unit name: {unit.character_id}</span> |{" "}
              <span>Tier: {unit.tier}</span> |{" "}
              {unit.items.map((item) => (
                <span>{item} </span>
              ))}
            </div>
          ))}
          <hr />
        </React.Fragment>
      ))}
    </div>
  )
}

export default Match
