import React, { useEffect, useState } from 'react'
import BOOK_DATA from '../../data/book'
import Book from './Book'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../redux/actions/book-action'


export default function BookList() {
    // const[books,setBooks] = useState([])

    const books = useSelector(state=>state.allBooks.books)

    const  dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchBooks())
    },[])

  return (
    <div className='container' > 
        <h1 className='text-center'>All Books</h1>
        <div className='row'>
            {
                books.map((book,index)=>(
                    <Book key={index} data={book}/>
                ))
            }
        </div>
        
    </div>
  )
}
