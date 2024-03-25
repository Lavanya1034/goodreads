import React, { useEffect, useState } from 'react'
import BookDetail from '../../components/BookDetail'
import NavBar from '../../components/NavBar'
import BOOK_DATA from '../../data/book'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addBooks, removeBooks } from '../../redux/actions/book-action'

function BookDetailPage() {
    // const [book,setBook]= useState([])
    const book = useSelector(state=>state.book)
    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        dispatch(addBooks(BOOK_DATA[id]))
        return()=>{
          dispatch(removeBooks())
        }
    },[id])
  return (
    <div>
        <NavBar/>
        <BookDetail data={book}/>
    </div>
  )
}

export default BookDetailPage
