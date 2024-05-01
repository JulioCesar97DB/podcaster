import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  return (
    <nav className='text-cyan-700 font-bold mb-1 mx-20'>
        <Link to='/'>Podcaster</Link>
        <hr />
    </nav>
  )
}
