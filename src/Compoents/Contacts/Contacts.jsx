import React from 'react'
import Style from "./Contacts.module.css"
export default function Contacts() {

  return <>


  <h1 className="text-uppercase  fw-bolder mt-4 mb-2 text-center">Contacts Section</h1>
  <div className="starContent d-flex justify-content-center   p-3 align-items-center mb-5">
          <div className={`${Style.line1} `}></div>
          <i className={`${Style.starColor} fa-solid fa-star h5 mx-2 `}></i>
          <div className={`${Style.line1}`}></div>

         </div>
    <form action="">

   <div className='w-50 mx-auto p-5 mb-5'>
    <input type="text" className='form-control my-3 border-0 shadow p-2'placeholder='Enter Your Name' />
    <input type="number" className='form-control my-3 border-0 shadow p-2'placeholder='Enter Your Age' />
    <input type="email" className='form-control my-3 border-0 shadow p-2'placeholder='Enter Your Email' />
    <input type="password" className='form-control my-3 border-0 shadow p-2'placeholder='Enter Your Password' />
    <button className='btn btn-outline-success my-4'>Send Message</button>
   </div>
    </form>

  
  </>
}
