import React from 'react'
import { Link } from 'react-router-dom'

import './cssNavBar.css';
import logo from '../logo/log.jpg'
import fon from '../image/img_4.jpg'
import cash from '../icons/costo.png'
import home from '../icons/home.png'
import free from '../icons/estimacion.png'
import precio from '../icons/precio.png'
import { FaMapLocationDot } from 'react-icons/fa6';
import work_1 from '../image/i_1.jpg'
import work_4 from '../image/i_4.jpg'
import work_5 from '../image/i_5.jpg'
import work_6 from '../image/i_6.jpg'
import work_7 from '../image/i_7.jpg'
import work_8 from '../image/i_8.jpg'
import work_9 from '../image/i_9.jpg'
import work_10 from '../image/i_10.jpg'
import work_11 from '../image/i_11.jpg'
import work_12 from '../image/i_12.jpg'
import work_13 from '../image/i_13.jpg'
import work_14 from '../image/i_14.jpg'
import work_14_2 from '../image/i_14_2.jpg'
import work_15 from '../image/i_15.jpg'
import work_16 from '../image/i_16.jpg'
import work_17 from '../image/i_17.jpg'
import work_18 from '../image/i_18.jpg'
import work_19 from '../image/i_19.jpg'
import work_20 from '../image/i_20.jpg'


export const Ini = () => {
    return (
        <div className='w-[100%]'>
            <div id="fondo_img" className='items-center justify-left flex'>
                <div className='position-absolute ml-[5%]'>
                    <label htmlFor="" className='text-[35px]
                     text-white'>Start your <br /></label>
                    <label htmlFor="" className='bg-opacity-50 rounded-[3px] bg-fonNavBar
                    text-[45px]  text-colorLetras font-bold'>HARDWOOD FLOORING <br /></label>
                    <label htmlFor="" className='text-[35px] text-white'>project today</label>

                </div>

            </div>
            <hr />
            <div className='  w-auto items-center justify-center sm:flex mt-[20px]'>
                <div className=' items-center justify-center flex sm:w-[30%]'>
                    <center><h2 className='lg:text-[35px] font-bold 
                border-2 rounded-tr-[20px] sm:mt-[-20%]
                sm:ml-[30%] border-fonNavBar rounded-bl-[20px] p-3 '>WHO IS <br />
                        SALITRE HARDWOOD <br /> FLOORING</h2></center>

                </div>
                <div className=' sm:w-[60%]  justify-center p-5'>
                    <div className='sm:flex mb-[10%]'>
                        <center> <section className=' drop-shadow-xl
                            sm:rounded-tl-[20px] sm:rounded-bl-[20px] bg-fonNavBar
                                sm:h-[450px]
                                sm:w-[400px] pt-6 sm:pt-20'>
                            <img src={logo} className='z-[3] sm:w-[300px]' alt="" />
                            <p className='text-colorLetras text-[20px] mt-[20px]
                                z-[3]'>
                                Salitre Hardwood Flooring <br />
                                installation and maintenance services inside and outside the city of Chicago.
                            </p>
                        </section></center>
                        <section className='sm:translate-x-[-70px] z-[-1]'>
                            <img src={fon} className='sm:w-[290px] sm:h-[450px]' alt="" />
                        </section>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <div >
                    <center>
                        <h1 className='text-[30px] font-bold'>WHAT MAKE SALITRE HARDWOOD FLOORING</h1>
                    </center>
                </div>
                <div className='sm:flex '>
                    <div className='sm:w-[50%] p-4 '>
                        <center>
                            <h5 className='border-2 p-1 text-fonNavBar rounded-[15px] bg-colorLetras '><span></span>1. Hardwood flooring installation</h5><br />
                            <br />
                            <h5 className='border-2 p-1 text-colorLetras rounded-[15px] bg-fonNavBar '>2. Hardwood flooring finishing / refinishing</h5><br />
                            <br />
                            <h5 className='border-2 p-1 text-fonNavBar rounded-[15px] bg-colorLetras '>3. Staining/Color Hardwood Floors</h5><br />
                            <br />
                            <h5 className='border-2 p-1 text-colorLetras rounded-[15px] bg-fonNavBar '>4. Repair and Replacing hardwood floors</h5><br />
                            <br />
                            <h5 className='border-2 p-1 text-fonNavBar rounded-[15px] bg-colorLetras '>5. Baseshoe Installation for hardwood floors</h5>
                            <br />
                        </center>
                    </div>
                    <div className='sm:w-[50%] p-4'>
                        <center>
                            <h5 className='border-2 p-1 text-colorLetras rounded-[15px] bg-fonNavBar '>6. Hardwood custom borders</h5><br />
                            <br />
                            <h5 className='border-2 p-1 text-fonNavBar rounded-[15px] bg-colorLetras '>7. Hardwood Stairs / Railings</h5><br />
                            <br />
                            <h5 className='border-2 p-1 text-colorLetras rounded-[15px] bg-fonNavBar '>10. Flooring Inspection and evaluation</h5><br />
                            <br />
                            <h5 className='border-2 p-1 text-fonNavBar rounded-[15px] bg-colorLetras'>11. hardwood Coat / Re-coat / Screen</h5><br />
                            <br />
                            <h5 className='border-2 p-1 text-colorLetras rounded-[15px] bg-fonNavBar'>12.Laminate floors installations</h5>
                        </center>
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        <center>
                            <h1 className='text-[30px] font-bold'>
                                WHAT BENEFITS YOU BY CHOOSING
                            </h1>
                            <h1 className='text-[30px] font-bold'>
                                SALITRE HARDWOOD FLOORING?
                            </h1>
                        </center>
                    </div>
                    <div className='mt-[35px] mb-[35px]'>
                        <section className='sm:w-[100%] sm:flex place-content-around'>

                            <div className='sm:w-[200px]'>
                                <center>
                                    <div>
                                        <img src={cash} className='w-[150px] sm:w-[80px]' alt="" />
                                    </div>
                                    <div>
                                        <h2 className='font-bold text-[17px]'>Respect you & your house</h2>
                                        <p>We are not gonna tell you something and at the end ask you for another ting. We are trustworthy.</p>
                                    </div>
                                </center>
                            </div>
                            <div className='sm:w-[200px]'>
                                <center>
                                    <div>
                                        <img src={precio} className='w-[150px] sm:w-[80px]' alt="" />
                                    </div>
                                    <div>
                                        <h2 className='font-bold text-[17px]'>Affordable prices</h2>
                                        <p>We are not gonna tell you something and at the end ask you for another ting. We are trustworthy.</p>
                                    </div>
                                </center>
                            </div>


                        </section>
                        <section className='sm:w-[100%] sm:flex place-content-around sm:mt-[60px] '>
                            <div className='sm:w-[200px]'>
                                <center>
                                    <div>
                                        <img src={home} className='w-[150px] sm:w-[80px]' alt="" />
                                    </div>
                                    <div>
                                        <h2 className='font-bold text-[17px]'>Respect you & your house</h2>
                                        <p>We are not gonna tell you something and at the end ask you for another ting. We are trustworthy.</p>
                                    </div>
                                </center>
                            </div>
                            <div className='sm:w-[200px]'>
                                <center>
                                    <div>
                                        <img src={free} className='w-[150px] sm:w-[80px]' alt="" />
                                    </div>
                                    <div>
                                        <h2 className='font-bold text-[17px]'>Free estimates</h2>
                                        <p>We are not gonna tell you something and at the end ask you for another ting. We are trustworthy.</p>
                                    </div>
                                </center>
                            </div>
                        </section>
                    </div>
                </div>
                <hr />
                {/* ////////////////////////////////////////////////////////////////////////// */}
                <div className=''>
                    <div className='mt-[30px]'>
                        <center>
                            <h1 className='text-[30px] font-bold'> SOME SALITRE HARDWOOD FLOORING WORKS</h1>
                        </center>
                    </div>
                    <div className='sm:flex place-content-around'>
                        <div className='p-4'>
                            <section className='sec_work h-auto sm:w-[210px] sm:h-[300px] border-2 rounded-[5%]'>
                                <div className='w-auto justify-center p-2 flex'>
                                    <a href={work_1} target="_blank" rel="noopener noreferrer">
                                        <img src={work_1} className='w-[300px] sm:w-[175px] sm:h-[160px]' alt="" /></a>
                                </div>

                                <div className='p-4'>

                                    <p>
                                        <span className='font-bold'>Wood:</span>
                                        Red oak
                                    </p>
                                    <p>
                                        <span className='font-bold'> Color:</span>
                                        Natural
                                    </p>
                                    <p>
                                        <span className='font-bold'> Work:</span>
                                        Installation and sending
                                    </p>
                                </div>
                            </section>
                        </div>
                        <div className='p-4 '>

                            <section className='sec_work h-auto sm:w-[210px] sm:h-[300px] border-2 rounded-[5%]'>
                                <div className='w-auto justify-center p-2 flex'>
                                    <a href={work_7} target="_blank" rel="noopener noreferrer">
                                        <img src={work_7} className='w-[300px] sm:w-[175px] sm:h-[190px]' alt="" /></a>
                                </div>
                                <div className='p-4'>

                                    <p>
                                        <span className='font-bold'>Work:</span>
                                        Installation of <br></br>laminate flooring
                                    </p>

                                </div>
                            </section>
                        </div>
                        <div className='p-4 '>
                            <section className='sec_work h-auto sm:w-[210px] sm:h-[300px] border-2 rounded-[5%]'>
                                <div className='w-auto justify-center p-2 flex'>
                                    <a href={work_5} target="_blank" rel="noopener noreferrer">
                                        <img src={work_5} className='w-[300px] sm:w-[175px] sm:h-[160px]' alt="" /></a>
                                </div>
                                <div className='p-4'>

                                    <p>
                                        <span className='font-bold'>Wood:</span>
                                        Red oak
                                    </p>
                                    <p>
                                        <span className='font-bold'> Color:</span>
                                        Dark Walnut
                                    </p>
                                    <p>
                                        <span className='font-bold'> Work:</span>
                                        Installation and sending
                                    </p>
                                </div>
                            </section>
                        </div>

                    </div>
                    <div>
                        <div className='p-4 items-center justify-center flex '>
                            <section className='sec_work h-auto p-5  border-2 items-center justify-center flex rounded-[5%]'>
                                <img src="" alt="" />
                                <div>
                                    <Link to="/Works">
                                        See more...
                                    </Link>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <footer className='sm:h-[auto]  bg-fonNavBar sm:flex'>
                    <div className='sm:border-r-2 sm:w-[33%]'>
                        <div>
                            <center> <h2 className=' text-[25px] font-bold text-colorLetras'>Contact</h2></center>

                        </div>
                        <div className='mt-[5%] item-center justify-center flex '>
                            <span className='sm:ml-[5%] text-colorLetras'>Email: <a href="mailto:migue.cheaves@gmail.com" className='text-colorLetras'>migue.cheaves@gmail.com</a></span>
                        </div>
                        <div>
                            <span className='sm:ml-[5%] item-center justify-center flex text-colorLetras'>Phone 1: +1 (312) 934-7229 </span>
                        </div>
                        <div>
                            <span className='sm:ml-[5%] item-center justify-center flex text-colorLetras'>Phone 2: +1 (773) 999-0830</span>
                        </div>
                    </div>
                    <div className='sm:border-r-2 sm:w-[33%]'>
                        <div className='item-center justify-center flex'>
                            <img src={logo} className='sm:w-[150px] w-[230px] mt-[5%]' alt="" />
                        </div>
                    </div>
                    <div className=' sm:w-[33%]'>
                        <div>
                            <center><h2 className='text-[25px] font-bold text-colorLetras'>Ubication</h2></center>

                        </div>
                        <div>
                            <span className=' item-center justify-center flex text-colorLetras mt-[7%]'>
                                <FaMapLocationDot size={20} />-Chicago Illinois
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

