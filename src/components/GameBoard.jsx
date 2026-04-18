import PlayerPanel from "./PlayerPanel"
import EnemyPanel from "./EnemyPanel"
import ActionPanel from "./ActionPanel"
import LogPanel from "./LogPanel"

function GameBoard({ gameState}) {
    return (
        <div>
            <PlayerPanel player={gameState.player} />
            <EnemyPanel enemy={gameState.enemy} />
            <ActionPanel team={gameState.player.redTeam}/>
            <ActionPanel team={gameState.player.blueTeam}/>
            <LogPanel info={gameState.log}/>
        </div>
    )
}

export default GameBoard