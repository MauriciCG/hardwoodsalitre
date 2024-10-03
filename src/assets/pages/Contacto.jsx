import React from 'react'
import { LuContact } from 'react-icons/lu';
import { TbMail } from 'react-icons/tb';
import { PiWhatsappLogoDuotone } from 'react-icons/pi';
import { BiSolidPhoneCall } from 'react-icons/bi';


export const Contacto = () => {
  return (
    <div className='w-[100%]'>
      <div className='h-[15vh]'></div>
      <div>
        <center>
          <LuContact className='text-fonNavBar' size={170} />
          <h1>
            contact us
          </h1>
        </center>
      </div>
      <div className='sm:flex justify-center sm:mt-[1%]'>
        <div className=' p-4'>

          <center>
            <section className='h-[250px] sm:w-[210px] items-center
            justify-center flex rounded-[4px]  border-2 shadow-lg'>

              <div>

                <h2>
                  <center>
                    <a type="button" class="btn" target="_blank"
                      href="https://wa.me/+17739990830?text=Hello!"
                      id="btn_whats"><PiWhatsappLogoDuotone className='text-gren' size={100} />
                      Go to whatsapp </a></center>
                </h2>
              </div>
            </section>

          </center>

        </div>
        <div className=' p-4'>
          <center>
            <section className='h-[250px] sm:w-[210px]
             items-center
             justify-center flex  rounded-[4px] border-2 shadow-lg'>

              <div>
                <BiSolidPhoneCall className='' size={100} />
                <h2>
                  <div>
                    <span className='sm:ml-[5%] item-center
                     justify-center flex text-fonNavBar'>Phone:+1 (312) 934-7229 </span>
                  </div>
                  <div>
                    <span className='sm:ml-[5%] item-center 
                    justify-center flex text-fonNavBar'>Phone:+1 (773) 999-0830</span>
                  </div>
                </h2>
              </div>
            </section>
          </center>
        </div>
        <div className='p-4'>
          <center>
            <section className='h-[250px] sm:w-[210px] 
             items-center
             justify-center flex rounded-[4px] border-2 shadow-lg'>

              <div>
                <TbMail className='text-colorLetras' size={100} />
                <h2>
                  <div className='mt-[5%] item-center justify-center flex '>
                    <span className='sm:ml-[5%] text-fonNavBar'>Email:
                    <a href="mailto:migue.cheaves@gmail.com" className='text-fonNavBar'><br />migue.cheaves@gmail.com</a></span>
                  </div>
                </h2>
              </div>
            </section>
          </center>
        </div>
      </div>
    </div>
  )
}


