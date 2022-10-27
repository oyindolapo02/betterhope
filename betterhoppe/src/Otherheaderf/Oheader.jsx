import React from 'react'
import './Oheader.css'
import { Link } from 'react-router-dom'

const Oheader = () => {
  return (
    <div className='oheader'>
        <div className='oheaderimg'><img src='' alt="logo" /></div>
        <div className='olist'>
            {/* <li>Home</li> */}
            <Link to='/' ><li>Home</li></Link>
            {/* <li>Campaigns</li> */}
            <Link to='/Campaigns' ><li>Campaigns</li></Link>
            <Link to='/About Us' ><li>About Us</li></Link>
            <Link to='/Faq' ><li>FAQ'S</li></Link>
            <Link to='/Blog'><li>Blog</li></Link>
        </div>
        <div className='orightheader'>
            <h4>Register your NGO</h4>
            <button>Donate Now</button>
        </div>
    </div>
  )
}

export default Oheader