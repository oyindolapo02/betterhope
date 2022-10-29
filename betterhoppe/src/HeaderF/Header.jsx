import React from 'react'
import './Header.css'
import Modal from '../Modal/Modal'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = ({listimg, listone, listtwo, listthree, listfour, listfive, rightlist, rightlistbtn }) => {

  const [modalResponse, setmodalResponse] = useState(false)

  function openmodal() {
    setmodalResponse(true)
  }

  function closemodal() {
    setmodalResponse(false)
  }

  return (
    <div className='header'>
        <div className='headerimg'></div>
        <div className='list'>
            {/* <li>Home</li> */}
            <Link to='/' ><li>{listone}</li></Link>
            {/* <li>Campaigns</li> */}
            <Link to='/Campaigns' ><li>{listtwo}</li></Link>
            <Link to='/About Us' ><li>{listthree}</li></Link>
            <Link to='/Faq' ><li>{listfour}</li></Link>
            <Link to='/Blog'><li>{listfive}</li></Link>
        </div>
        <div className='rightheader'>
            <Link to='/RegisterNGO'><h4>{rightlist}</h4></Link>
            <Link to='/Donate'><button className='hbutton'>{rightlistbtn}</button></Link>
            <div onClick={openmodal} className='menu'><AiOutlineMenu /></div>
        </div>

        { modalResponse ? <Modal /> : null }
        { modalResponse ? <Modal onClick={closemodal} /> :null }
    </div>
  )
}

export default Header