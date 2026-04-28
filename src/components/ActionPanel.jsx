import {actions} from "../data/actions.js" 
import { useGame } from "../context/GameContext.jsx"


function ActionPanel({ team }) {
    const teamActions = actions.filter(action => team.actions.includes(action.id))
    const {dispatch} = useGame()
    return (
        <div>
            <p>Nivel: {team.level}</p>
            <div>Actions: {teamActions.map(action => 
                <button onClick={() => dispatch({type: 'ADD_ACTION', payload: action.id})}>
                    {action.name}
                </button>
            )}</div>
        </div>
    )
}

export default ActionPanel