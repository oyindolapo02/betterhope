import React from 'react'
import Header from '../HeaderF/Header'
import './Registerngo.css'
import Footer from '../Footerf/Footer'

const Registerngo = () => {
  return (
    <div className='Registerngo'>
        <Header
          listone = "Home"
          listtwo = "Campaigns"
          listthree = "About Us"
          listfour = "FAQ's"
          listfive = "Blog"
          rightlist = "Register your NGO"
          rightlistbtn = "Donate Now"
        />

        <div className='greenfields'>
            <h1>Register your NGO/FOUNDATION</h1>
            <p>Kindly enter correct infomation about <br /> your NGO/Foundation, you will recieve on email <br /> and get onboarded when verified</p>
      </div>

      <div className='lemongreenfields'>

        <div className='cashtranss'>
            <div className='first sim'>
                <div className='clip'>
                    <label htmlFor=""> Name of NGO/Foundation</label>
                    <input
                        type="text"
                        placeholder='name of NGO/foundation'
                        required
                    />
                </div>

                <div className='clipp'>
                    <label htmlFor="">Address</label>
                    <input
                        type="address"
                        placeholder='Address'
                        name="" 
                        id="" 
                    />
                </div>
            </div>

            <div className='second sim'>
                <div className='clip'>
                    <label htmlFor="">RC Number</label>
                    <input
                        type="text"
                        // required
                        placeholder='RC Number'
                    />
                </div>

                <div className='clipp'>
                    <label htmlFor="">Phone Number</label>
                    <input
                        type="number"
                        required 
                        placeholder='phone Number'
                    />
                </div>
            </div>

            <div className='third sim'>
                <label htmlFor="">Email Address</label>
                <input
                    type="email"
                    placeholder='enter NGO email address'
                />
            </div>

            <button className='fourth'>Proceed with Registration</button>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Registerngo