
function endTurn(gameState){
    return {
        ...gameState,
        player: {
            ...gameState.player,
            budget: gameState.player.budget + 100,
            actionPoints: gameState.player.maxActionPoints,
        }
    }
}

function addAction(gameState, actionId){
    return{
        ...gameState,
        actionQueue: [...gameState.actionQueue, actionId]
    }
}

export default endTurn