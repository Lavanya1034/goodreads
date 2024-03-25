
import { ActionTypes } from "../constants/action-types"

const intialState={
    books:[]
}

export const bookReducer=(state=intialState,{type,payload})=>{
    switch(type){
    case ActionTypes.FETCH_BOOK:
        return{
            ...state,
            books:payload
        }
    case ActionTypes.SET_BOOK:
        return{
            ...state,
            books:payload
        }
    default:
        return state;
    }
}

export const selectBookReducer=(state={},{type,payload})=>{
    switch(type){
        case ActionTypes.ADD_BOOK:
            return{
                ...state,...payload
            }
        case ActionTypes.REMOVE_BOOK:
            return{}
        default:
            return state;
    }
}