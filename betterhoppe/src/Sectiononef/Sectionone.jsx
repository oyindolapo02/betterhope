import React from 'react'
import './Sectionone.css'
import { AiFillPlayCircle } from 'react-icons/ai'
import africankidswindow from '../images/africankidswindow.png'
import { Link } from 'react-router-dom'


const Sectionone = ({ sectiondonate, donatesideplay }) => {
  return (
    <div className='sectionone'>
        <div className='sectiononebtn'>
            <div className='allinnertext'>
              <h1>GET connected <br /> to verified NGO'S & <br /> Foundations in need.</h1>
              <p>Betterhope helps connect individuals or organizations ready to make <br />charitable donations to verified NGO'S/fondations in need <br />of charitable donations in Lagos Nigeria.</p>
              <div className='sectionlink'>
                <Link to='/Donate'><button>{sectiondonate}</button></Link>
                <div className='iconngo'>
                  <li className='play'><AiFillPlayCircle/></li> <li>{donatesideplay}</li>
                </div>
              </div>
            </div>
        </div>
        <div className='sectiononeimage'>
          <div className='sectonebackcolor'>
            <div className='sectfrontimg'>
              <img src={africankidswindow} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sectionone