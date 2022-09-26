import React from 'react'
import secondImg from './images/secimg.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Bodybottom() {
    return (
        <>
            <div className='body-bottom'>
                {/* landing page ,bottom part starts */}

                <div className="container-fluid ">
                    <div className="row mt-4 mb-3">
                        <div className="col-12 mx-auto ">

                            <div className="row align-items-center">
                                <div className="col-md-6  pt-2 pt-lg-0 ms-lg-5 px-lg-5 order-1 order-lg-2 ">
                                    <h1 className='heading'>Focused On time saving.</h1>

                                    <p className='mt-2 para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque assumenda magni nisi architecto pariatur eum porro ea aliquam. Iusto, sapiente eum. Quasi rerum dolore et aperiam quibusdam libero quod nobis?
                                        Dolorem cum, natus itaque inventore quas tempora voluptatibus, autem laborum ipsa, eligendi enim eum id culpa alias atque unde laudantium a quo! Iure, facere voluptas temporibus amet quia autem dolorum?
                                        Numquam harum atque nam officia architecto esse amet provident. Corrupti, voluptatibus doloremque culpa debitis repellat facilis commodi nesciunt. Quia eveniet, cupiditate ea rerum in aliquid debitis voluptate ut porro ratione.
                                        Possimus tenetur quod minus nostrum fuga nam. Molestias delectus modi itaque animi, reiciendis repellat ullam repellendus, quibusdam esse rem possimus! Ratione doloribus est sed, impedit praesentium voluptas porro facilis dolore.
                                        Incidunt tenetur laboriosam aspernatur  </p>

                                    <a href="#" className="button-Body-bottom">Download the mobile app</a>
                                </div>

                                <div className="col-md-5 pt-lg-5 pt-5 mt-3 mt-lg-4  order-2 order-lg-1 ">
                                    <img src={secondImg} className='img-fluid animated' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* fotter part start */}
                <div className='footer'>
                    <div className='footer-left'>
                        <h2 className='logo'>OPEN AUTO.</h2>
                        <p>copyrights @ open auto all rights reseved.</p>

                    </div>
                    <div className='footer-right'>
                        <ul className='footer-right-top'>
                            <li><p><FaPhoneAlt className='mx-2' />+91-935708768</p></li>
                            <li><p><FaEnvelope className='mx-2' />johnsam@gmail.com</p></li>
                        </ul>
                        <div className='soc-med-mobile'>
                        <ul className='social-media '>
                            <li className='mx-2'><FaFacebookF size={22} /></li>
                            <li className='mx-2'><FaTwitter size={22} /></li>
                            <li className='mx-2'><FaYoutube size={22} /></li>
                            <li className='mx-2'><FaLinkedin size={22} /></li>
                            <li className='mx-2'><FaInstagram size={22} /></li>
                        </ul>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
