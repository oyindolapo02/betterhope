import React from 'react'
import './Footer.css'
import { BsTwitter, BsInstagram, BsYoutube, BsFacebook, BsGlobe, BsFillTelephoneForwardFill } from 'react-icons/bs'
import { MdLocationOn, MdMail, } from 'react-icons/md'
import { FaPaperPlane } from 'react-icons/fa'
import { useState } from 'react'

const Footer = () => {
    const [input, setinput] = useState('')

  return (
    <div className='footer'>
        <div className='footerone same'>
            <div className='footerimg'><img src="" alt="logo" /></div>
            <p>Betterhope helps connect individuals or organisations raedy to make charitable donations to verify NGO's/Fondations in need of charitable donations in Lagos Nigeria</p>
            <div className='footerlist'>
                <li><BsTwitter/></li>
                <li><BsInstagram/></li>
                <li><BsYoutube/></li>
                <li><BsFacebook/></li>
            </div>
        </div>
        <div className='footertwo same'>
            <h3>Quick Links</h3>
            <div className='footerlisttwo'>
                <li>Campaigns</li>
                <li>About Us</li>
                <li>FAQ's</li>
                <li>Blog</li>
                <li>Testimonial</li>
                <li>Donate Now</li>
            </div>
        </div>
        <div className='footerthree same'>
            <h3>Contact Us</h3>
            <div className='footerlistthree'>
                <li>132, Montgomery road, Lagos</li>
                <li>www.betterhope.org</li>
                <li>support@betterhope.org</li>
                <li>+234 905 8686886</li>
            </div>
        </div>
        <div className='footerfour same'>
            <h3>Get Newsletters</h3>
            <div className='footerlistfour'>
                <p>Get first hand updates <br /> about your donations and how <br /> the foundations are fairing from <br /> time  to time</p>
            </div>
            <form className='footerform' onSubmit={(e)=> (e.preventDefault)}>
                <input 
                    type="text"
                    placeholder='Enter Your Email Address'
                    required
                />
                <button><FaPaperPlane /></button>
            </form>
        </div>
    </div>
  )
}

export default Footer