import React from 'react'
import './Home.css'
import Header from '../HeaderF/Header'
import Sectionone from '../Sectiononef/Sectionone'
// import Campaigns from '../Campaignsf/Campaings'
import Campaignshome from '../CampaigndHome/Campaignshome'
import Footer from '../Footerf/Footer'
// import Modal from '../Modal/Modal'


const Home = () => {
  return (
    <div className='home'>
        <Header
          listimg = "../images/Vector.jpg"
          listone = "Home"
          listtwo = "Campaigns"
          listthree = "About Us"
          listfour = "FAQ's"
          listfive = "Blog"
          rightlist = "Register your NGO"
          rightlistbtn = "Donate Now"
        />
        <Sectionone
          sectiondonate = "Donate Now"
          donatesideplay = "See NGO's/Foundation"
        />
        {/* <Campaigns /> */}
        <Campaignshome />
        <Footer />

    </div>
  )
}

export default Home