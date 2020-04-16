import { ADD_Y } from "../actions"

let initialState = {
    divY: []
}

const landingPage = (state = initialState, action) => {
    switch(action.type){
        case ADD_Y: {
            return {
                ...state,
                divY: [...state.divY, action.y]
            }
        }
        default: 
            return state
    }
}

export default landingPage