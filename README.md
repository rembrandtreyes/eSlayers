# eSalyers - Riot Games Stats site
The vision is to allow players to access their stats from all the different Riot games.
Currently we only support:
#### Game: Team Fight Tactics
and 
#### Regions: North America

## Getting Started
This project uses Riot Games developer API. You will need to create an account at 
[https://developer.riotgames.com/](https://developer.riotgames.com/) and generate a 
DEVELOPMENT API KEY to utilize this app.

1. Clone this repo `git clone https://github.com/rembrandtreyes/eSlayers.git`
2. `cd eSlayers`
3. Run `yarn install`
4. Start the server with `yarn dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Developement API Key
Once you have your development api key generated locate a file called `.env.local.template`
duplicate that file and rename it `.env.local` and paste in your riot api key

It should look like this
`NEXT_PUBLIC_API_KEY=RGAPI-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

Restart your dev server and you should be able to access the API now. Enter in a user name
to test it out. If you do not play any Riot games you can use some of these summoner names to test.
* `scarra`
* `rjeezy`

### TODO:
1. Style the Home Page
2. Style the player cards for top players list
3. Style the Player profile page
4. Add more regions for players to search
5. Optimize fetch requests
6. Add more games for players to search
7. Upgrade assets to set 4 for TFT
