import {actions} from "../data/actions.js" 

function ActionPanel({ team }) {
const teamActions = actions.filter(action => team.actions.includes(action.id))

    return (
        <div>
            <p>Nivel: {team.level}</p>
            <div>Actions: {teamActions.map(action => <p key={action.id}> {action.name} [{action.cost}] : {action.description} </p>)}</div>
        </div>
    )
}

export default ActionPanel