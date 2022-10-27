import React from 'react'
import './Donateitem.css'
import Header from '../HeaderF/Header'

const Donateitem = () => {
  return (
    <div className='donateitem'>
      <Header
        listimg = "./images/Vector.jpg"
        listone = "Home"
        listtwo = "Campaigns"
        listthree = "About Us"
        listfour = "FAQ's"
        listfive = "Blog"
        rightlist = "Register your NGO"
        rightlistbtn = "Donate Now"
      />

      <div className='orgreenfield'>
        <h1>Donate Items</h1>
        <p>Here you get to read about the latest happenings <br /> about current situations of Rural Areas, NGO's and Fondations, <br /> And the playmakers Coming to their rescue</p>
      </div>

      <div className='lemonorgreenfield'>
        <form className='itemstrans'>
          <div className='allto'>
            <h4>Your Donation</h4>
            <div className='itemstransbtn'>
              <button>Cash</button>
              <button>Other Items</button>
            </div>
          </div>
          
          <div className='iteminput'>
            <h4>Donor's contact info</h4>
            <div className='itemin'>
              <input
                className='itemsinput'
                type="text"
                placeholder='Enter Donors FullName'
                required
              />

              <input
                className='itemsinput'
                type="text"
                placeholder='Enter Donors Phone Number'
                required
              />
            </div>
          </div>

          <div className='lastinputt'>
            <input
              className='itemsinput'
              type="text"
              placeholder='Enter Donors Email Address'
            />
          </div>

          <div className='boldup'>
            <h4>Item Details</h4>
            <input
              className='itemsinput'
              type="text"
              placeholder='Select Item Category'
              required
            />

            <input
              className='itemsinput'
              type="text"
              placeholder='Item Weight (Optional)'
            />
          </div>

          <div className='fngo'>
            <input
              className='itemsinput'
              type="text"
              placeholder='Select the Foundation/NGO'
            />
          </div>

          <div className='itemtext'>
            <h5>Leave a note</h5>
            <textarea className='messagearea' name="" id="messagearea" cols="30" rows="10"></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Donateitem