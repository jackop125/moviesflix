import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='py-10 '>
        <h1 className='text-center text-3xl my-5'> 404 PAGE NOT FOUND</h1>
        <p className='text-center underline text-green-500'><Link to={"/"}>Go Home Page </Link></p>
    </div>
  )
}

export default ErrorPage;