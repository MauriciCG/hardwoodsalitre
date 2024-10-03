import React from 'react'
import logo from '../logo/log.jpg'
import img_3 from '../image/img_3.jpg'
import { DiCelluloid } from "react-icons/di"
import { FaMapLocationDot } from 'react-icons/fa6'
export const Sobre = () => {
  return (
    <div className=''>
      <div className='h-[15vh]'></div>
      <div className='sm:flex p-4 sm:mb-[8%]'>
        <div className=''>
          <img src={logo} className='rounded-[5px] mb-[15px]' alt="" />
        </div>
        <div className='sm:ml-[25px]'>
          <p className='text-[18px] text-fonNavBar sm:mt-[10%]'>
            <span className='text-colorLetras font-bold text-[20px] mr-[8px]'>
              SALITRE HARDWOOB FLOORING</span>
            is a young and dynamic company specializing in flooring installation
            with a strong two-year track record in the industry.
             Our passion for flooring and commitment to excellence
            have led us to become a trusted choice for residential 
            and commercial projects in Chicago Illinois.
          </p>
        </div>
      </div>
      <hr />
      <div className='sm:flex p-4'>
        <div className='sm:flex bg-fonNavBar p-4 border-double border-[15px] border-colorLetras'>
          <div className='sm:w-[50%]'>
            <div>
              <h1 className='text-colorLetras font-bold text-[20px] sm:mt-[15%]'>
                Our History
              </h1>
            </div>
            <div>
              <p className='text-[18px] text-colorLetras sm:mt-[3%]'>
                Founded in 2021, Salitre Hardhoob Flooring was born 
                with the vision of providing high-quality flooring installation solutions,
                transforming every space into a place of beauty and functionality.
                 Over these two years, we have grown and evolved,
                perfecting our craft and forging strong relationships with our customers.
              </p>
            </div>
          </div>
          <div className='sm:w-[50%]'>
            <img src={img_3} className='sm:w-[600px] rounded-[5px]' alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className='mt-[7%]'>
          <center>
            <h1 className='text-[35px] text-fonNavBar font-bold'>
              Our Services
            </h1>
          </center>
        </div>
        <div className='sm:flex sm:place-content-around mt-[5%] mb-[5%]'>

          <div className=''>
            <h3 className='flex text-fonNavBar'><DiCelluloid />Hardwood flooring installation</h3><br />
            <h3 className='flex text-fonNavBar'><DiCelluloid />Hardwood flooring finishing / refinishing</h3><br />
            <h3 className='flex text-fonNavBar'><DiCelluloid />Staining/Color Hardwood Floors</h3><br />
            <h3 className='flex text-fonNavBar'><DiCelluloid />Repair and Replacing hardwood floors</h3><br />
            <h3 className='flex text-fonNavBar'><DiCelluloid />Baseshoe Installation for hardwood floors</h3><br />
          </div>
          <div className=''>
            <h3 className='flex text-fonNavBar'><DiCelluloid />Hardwood custom borders</h3><br />
            <h3 className='flex text-fonNavBar'><DiCelluloid />Hardwood Stairs / Railings</h3><br />
            <h3 className='flex text-fonNavBar'><DiCelluloid />Flooring Inspection and evaluation</h3><br />
            <h3 className='flex text-fonNavBar'><DiCelluloid />hardwood Coat / Re-coat / Screen</h3><br />
            <h3 className='flex text-fonNavBar'><DiCelluloid />Laminate floors installations</h3>
          </div>
        </div>
      </div>
      <hr />
      <div className='sm:flex place-content-around p-4'>
        <div className='sm:w-[50%] p-4'>
          <section className='bg-fonNavBar p-4 rounded-[20px] border-2 border-colorLetras h-[100%]'>
            <h2 className='text-colorLetras text-[25px] font-bold'>
              Our Philosophy
            </h2>
            <p className='text-colorLetras'>
              At Salitre Hardhoob Flooring, we believe in quality, dedication, and attention to detail. Every project we undertake
              is an opportunity to demonstrate our commitment to customer satisfaction.
              We take pride in offering personalized service that adapts to the unique needs and preferences of each customer.
            </p>
          </section>
        </div>
        <div className='sm:w-[50%] p-4'>
          <section className='bg-colorLetras p-4 rounded-[20px] border-2 border-fonNavBar h-[100%]'>
            <h2 className='text-fonNavBar text-[25px] font-bold'>
              Commitment to Quality
            </h2>
            <p>
              Quality is at the core of everything we do. We use high-quality materials and have a highly skilled installation
              team that ensures lasting and beautiful results in every project.
            </p>
          </section>
        </div>
      </div>
      <hr />
      <footer className='sm:h-auto bg-fonNavBar sm:flex'>
        <div className='sm:border-r-2 sm:w-[33%]'>
          <div>
            <center> <h2 className=' text-[25px] font-bold text-colorLetras'>Contact</h2></center>

          </div>
          <div className='mt-[5%] item-center justify-center flex '>
            <span className='sm:ml-[5%] text-colorLetras'>Correo: <a href="mailto:migue.cheaves@gmail.com" className='text-colorLetras'>migue.cheaves@gmail.com</a></span>
          </div>
          <div>
            <span className='sm:ml-[5%] item-center justify-center flex text-colorLetras'>Phone 1:+1 (312) 934-7229 </span>
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
  )
}

