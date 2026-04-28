
function PlayerPanel({player}){
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
