import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import mainImg from './images/Pickup_Illustration.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Bodytop() {

  const [name, setname] = React.useState('');
  const [email, setemail] = React.useState('');

  const collectData = async () => {
    //  console.log(email,password);
    let result = await fetch("http://localhost:4000/submit",
      {
        method: 'post',
        body: JSON.stringify({ name, email }),
        headers: { 'Content-Type': 'application/json' },
      });
    result = await result.json();
    console.log(result);
    if(result){
      alert("submitted successfully");
    }

  }

  return (
    <>
      <div className='body-top'>
        <nav>
          <h2 className='logo'>OPEN AUTO.</h2>
          <ul className='nav-right '>
            <li><p><FaPhoneAlt className='mx-2'/>+91-935708768</p></li>
            <li><p><FaEnvelope className='mx-2'/>johnsam@gmail.com</p></li>
            <li><a href="#" className="button">Download the mobile app</a></li>
          </ul>
        </nav>
        {/* homepage starts */}

        <div className="container-fluid ">
          <div className="row mt-4 mb-3">
            <div className="col-12 mx-auto ">

              <div className="row align-items-center">
                <div className="col-md-6  pt-2 pt-lg-0 order-1 order-lg-1 ">
                  <h1 className='heading '>Vehicle Maintenance From The Comfort Of Your Home. </h1>
                  <p className='mt-2 para'>Open Auto Soothes the hassle of maintaining yourr Vehicle and helps you deal with unexpected repairs worry-free. </p>
                  <div className='form'>
                    <input className='inputBox' type="text" placeholder='Enter Your Name'
                      value={name} onChange={(e) => setname(e.target.value)}
                    />
                    <input className='inputBox' type="text" placeholder='Enter Your Email'
                      value={email} onChange={(e) => setemail(e.target.value)}
                    />
                    <button onClick={collectData} className='submit-button' type='button' >Submit</button>
                  </div>


                </div>

                <div className="col-md-6  pt-4 mt-2 pt-lg-5  order-2 order-lg-2 ">
                  <img src={mainImg} className='img-fluid animated' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* social media part */}
        <div className='social-media me-5 pt-4'>
          <ul className='me-2'>
            <li><FaFacebookF size={22} /></li>
            <li><FaTwitter size={22} /></li>
            <li><FaYoutube size={22} /></li>
            <li><FaLinkedin size={22} /></li>
            <li><FaInstagram size={22} /></li>
          </ul>
        </div>
      </div>
    </>
  )
}
