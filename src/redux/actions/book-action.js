import BOOK_DATA from "../../data/book";
import { ActionTypes } from "../constants/action-types";

export const fetchBooks=()=>async(dispatch)=>   {
    dispatch({type:ActionTypes.FETCH_BOOK,payload:BOOK_DATA})
}

export const setBooks=(books)=>{
    return{
        type:ActionTypes.SET_BOOK,
        payload:books
    }
}
export const addBooks=(book)=>{
    return{
        type:ActionTypes.ADD_BOOK,
        payload:book
    }
}
export const removeBooks=()=>{
    return{
        type:ActionTypes.REMOVE_BOOK
       
    }
}
