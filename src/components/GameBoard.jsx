import PlayerPanel from "./PlayerPanel"
import EnemyPanel from "./EnemyPanel"
import ActionPanel from "./ActionPanel"
import LogPanel from "./LogPanel"
import { useGame } from "../context/GameContext"

function GameBoard() {
    const {gameState, dispatch} = useGame()
    return (
        <div>
            <PlayerPanel player={gameState.player} />
            <EnemyPanel enemy={gameState.enemy} />
            <ActionPanel team={gameState.player.redTeam}/>
            <ActionPanel team={gameState.player.blueTeam}/>
            <LogPanel info={gameState.log}/>
            <button onClick={() => dispatch({type: 'END_TURN'})}>
                    END TURN
                </button>
        </div>
    )
}

export default GameBoard