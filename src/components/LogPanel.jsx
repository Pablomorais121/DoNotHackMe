import { useGame } from "../context/GameContext"

function LogPanel(){
    const {gameState: {log}} = useGame()
    return (
        <div>
            <p>{log}</p>
        </div>
    )
}

export default LogPanel
