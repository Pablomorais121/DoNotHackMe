
function PlayerPanel({player}){
    return (
        <div>
            <p>{player.hp}</p>
            <p>{player.budget}</p>
            <p>{player.actionPoints}</p>
        </div>
    )
}

export default PlayerPanel
