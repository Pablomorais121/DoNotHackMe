import { useGame } from "../context/GameContext"

function PlayerPanel(){
    const {gameState} = useGame()
    const player = gameState.player
    return (
        <div>
            <p>---------------------</p>
            <p>Player data</p>
            <p>{player.hp}</p>
            <p>{player.budget}</p>
            <p>{player.actionPoints}</p>
            <p>---------------------</p>
        </div>
    )
}

export default PlayerPanel
