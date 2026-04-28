import { createContext, useReducer, useContext } from "react";
import { reducer } from "../logic/reducer";
import {initialState} from '../App'

export const GameContext = createContext(null)

export function GameProvider({ children}) {
    const [gameState, dispatch] = useReducer(reducer, initialState)

    return (
        <GameContext.Provider value={{gameState, dispatch}}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame(){
    return useContext(GameContext)
}