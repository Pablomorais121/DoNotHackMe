import {addAction, endTurn} from './gameLogic'

const handlers = {
    ADD_ACTION: (state, payload) => addAction(state, payload),
    END_TURN: (state) => endTurn(state)
}

function reducer(state, action) {
    const handler = handlers[action.type]
    return handler ? handler(state,action.payload) : state
}

export function reducer