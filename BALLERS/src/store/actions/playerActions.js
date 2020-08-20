import axios from 'axios'

export const FETCH_PLAYERS_START = "FETCH_PLAYERS_START"
export const FETCH_PLAYERS_SUCCESS = "FETCH_PLAYERS_SUCCESS"

export const fetchPlayers = () => (dispatch) => {
    dispatch({ type : FETCH_PLAYERS_START})
    axios.get("https://www.balldontlie.io/api/v1/players")
    .then( res => { 
        console.log(res.data)
        dispatch({ type : FETCH_PLAYERS_SUCCESS, payload : res.data})
    })
    .catch( err => console.log(err))
} 

// const thunk = store => next => action => {
//     if (typeof action === "object") {
//         next(action);
//     } else if ( typeof action === "function") {
//         action(store.dispatch);
//     }
// }