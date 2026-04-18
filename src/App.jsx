import {useState} from 'react'
import GameBoard from './components/GameBoard'

const initialState = {
  turn: 1,
  player: {
    hp: 100,
    budget: 0,
    actionPoints: 2,
    maxActionPoints: 2,
    redTeam: {level: 1, actions: ['action_red_recon']},
    blueTeam: {level: 1, actions: ['action_blue_monitor']},
  },
  enemy: {
    hp: 100,
  },
  log: []
}

function App() {
  const [gameState, setGameState] = useState(initialState)

  return <GameBoard gameState={gameState}/>
}

export default App