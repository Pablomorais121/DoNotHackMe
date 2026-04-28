import GameBoard from './components/GameBoard'
import { GameProvider } from './context/GameContext'

export const initialState = {
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
  log: [],
  actionQueue: []
}

function App() {
  return (
    <GameProvider>
      <GameBoard/>
    </GameProvider>
  )
}

export default App