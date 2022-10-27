import React from 'react'
import './Donate.css'
import Header from '../HeaderF/Header'
import Footer from '../Footerf/Footer'
import { Link } from 'react-router-dom'


const Donate = () => {
  return (
    <div className='donate'>
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

      <div className='greenfield'>
        <h1>Donate Cash</h1>
        <p>Here you get to read about the latest happenings <br /> about current situations of Rural Areas, NGO's and Fondations, <br /> And the playmakers Coming to their rescue</p>
      </div>

      <div className='lemongreenfield'>
        <form className='cashtrans'>
          <div className='cashotherbtn'>
            <div className='cashbtn'>
              <button>Cash</button>
              <Link to='/Donateitem'><button>Other Items</button></Link>
              
            </div>
          </div>

          <div className='info input'>
            <h3>Billing contact info</h3>
            <div className='data'>
              <input
              className='inp'
              type="text" 
              placeholder='Enter Senders FullName' 
              required 
            />

            <input
              className='inp'
              type="number"
              placeholder='Enter Senders Phone Number'
              required
            />
            </div>

            <div className='cardbord input'>
              <input
                className='inp'
                type="email"
                placeholder='Enter Sender Email Address'
                required
              />
            </div>
          </div>

          <div className='cardinf'>
            <h1>payment Details</h1>
            <div className='cardpay'>
              <div className='cardpayy'>
                <input 
                  className='inp'
                  type="text"
                  placeholder='Name on card'
                  required
                />

                <input
                  className='inp'
                  type="number"
                  placeholder='Card Verification Number (CVV)'
                  required
                />
              </div>

              <div className='card'>
                <div className='cards'>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </div>
                <div className='cardno'>
                  <input 
                    className='inp'
                    type="number"
                    placeholder='Credit Card Number'
                    required
                  />

                  <input
                    className='inp'
                    type="date"
                    placeholder='Card Expiry Date'
                    name="" 
                    id="" 
                  />
                </div>

                <div className='sngo'>
                  <input
                    className='inp'
                    type="text"
                    placeholder='Select the Fondation/NGO'
                  />
                </div>
                <div className='submt'>
                  <button>Proceed With Donation</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Donate