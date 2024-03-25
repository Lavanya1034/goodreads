import React from 'react'
import { Link } from 'react-router-dom'

function Book(props) {
    const {title,image,id} = props.data
    console.log(id)
  return (
    <div className='col-sm-3 p-2'>
        <div className="card">
            <img src={image} alt="" className="card-img-top" />
            <div className="card-body">{title}</div>
        </div>
        <Link to={"/books/detail/"+id} className="btn btn-dark btn-block">Show Details</Link>
      
    </div>
  )
}

export default Book
