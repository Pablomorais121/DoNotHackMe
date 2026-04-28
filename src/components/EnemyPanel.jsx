import { useGame } from "../context/GameContext"


function EnemyPanel(){
    const {gameState: {enemy}} = useGame()
    return ( 
        <div>
            <p>---------------------</p>
            <p>Enemy data</p>
            <p>{enemy.hp}</p>
            <p>---------------------</p>
        </div>
    )
}

export default EnemyPanel