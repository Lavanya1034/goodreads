import {combineReducers} from  'redux';
import { bookReducer, selectBookReducer } from './book-reducers';


const rootReducer= combineReducers({
    allBooks:bookReducer,
    book:selectBookReducer
})

export default rootReducer;