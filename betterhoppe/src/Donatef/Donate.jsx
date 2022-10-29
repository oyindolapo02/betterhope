import React from 'react'
import './Donate.css'
import Header from '../HeaderF/Header'
import Footer from '../Footerf/Footer'
import { Link } from 'react-router-dom'
import PaystackPop from '@paystack/inline-js' 
import { useState } from 'react'


const Donate = () => {
  const [email, setemail] = useState('')
  const [Amount, setAmount] = useState('')
  const [phone, setphone] = useState('')
  const [name, setname] = useState('')

  const payment = (e)=> {
    e.preventDefault();
    const payStack = new PaystackPop()
    payStack.newTransaction({
      key: "pk_test_b76aa3d2758fbf37f3a8b2bf53b0462ebf66e0c9",
      Amount: Amount * 100,
      email,
      name,
      phone,
      onSuccess(transaction){
        let message = `trasaction complete! reference ${transaction.reference}`
        alert(message)
      },
      onCancel(){
        alert('you just terminated this transaction')
      }
    })
  }


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
              value={name}
              onChange = {(e)=> setname(e.target.value)} 
            />

            <input
              className='inp'
              type="number"
              placeholder='Enter Senders Phone Number'
              required
              value={phone}
              onChange= {(e)=> setphone(e.target.value)}
            />
            </div>

            <div className='cardbord input'>
              <input
                className='inp'
                type="email"
                placeholder='Enter Sender Email Address'
                required
                value={email}
                onChange = {(e)=> setemail(e.target.value)}
              />
            </div>
          </div>

          <div className='cardinf'>
            <h1>payment Amounts</h1>
            <div className='cardpay'>
              <div className='cardpayy'>
                <input 
                  className='inp'
                  type="text"
                  placeholder='Enter your Amount you want to donate'
                  required
                  value={Amount}
                  onChange={(e)=> setAmount(e.target.value)}
                />

                {/* <input
                  className='inp'
                  type="number"
                  placeholder='Card Verification Number (CVV)'
                  required
                /> */}
              </div>

              <div className='card'>
                {/* <div className='cards'>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </div> */}
                {/* <div className='cardno'>
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
                </div> */}

                <div className='sngo'>
                  {/* <input
                    className='inp'
                    type="text"
                    placeholder='Select the Fondation/NGO'
                  /> */}
                </div>
                <div className='submt'>
                  <button type='submit' onClick={payment}>Proceed With Donation</button>
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