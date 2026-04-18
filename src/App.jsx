import {useState} from 'react'

const initialState = {
  turn: 1,
  player: {
    hp: 100,
    budget: 0,
    actionPoints: 2,
    redTeam: {level: 1, actions: ['recon']},
    blueTeam: {level: 1, actions: ['monitor']},
  },
  rival: {
    hp: 100,
  },
  log: []
}

function App() {
  const [gameState, setGameState] = useState(initialState)

  return <div>DoNotHackMe</div>
}

export default App