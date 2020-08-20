import { FETCH_PLAYERS_START, FETCH_PLAYERS_SUCCESS } from '../actions/playerActions'

const initialState = {
    players : [],
    isLoading : false, 
    errors : ""
}

const playerReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PLAYERS_START:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_PLAYERS_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                players: action.payload
            }
        default: return state
    }
}

export { playerReducer }