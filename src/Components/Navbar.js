import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
        <header>
            <nav className='navbar'>
   <h1>Balla</h1>
   <ul>
       <Link to='/home' style={{textDecoration:'none'}}  className='li'>Home</Link>
       <Link to='/shope' style={{textDecoration:'none'}} className='li'>Shope</Link>
       <Link to='/favorate' style={{textDecoration:'none'}} className='li'>Favorite</Link>
       <Link to='/order' style={{textDecoration:'none'}} className='li'>Order</Link>
       <Link to='/contact' style={{textDecoration:'none'}} className='li'>Contact</Link>
       <div className='profile'>
           <span>Profile</span>
           <button>Add</button>
       </div>
   </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar