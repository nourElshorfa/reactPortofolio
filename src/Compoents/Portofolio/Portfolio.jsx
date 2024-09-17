import React from 'react'
import  Style from "./Portfolio.module.css"
import nour1 from "../../Assets/Images/WhatsApp Image 2024-08-24 at 14.38.15.jpeg"
import nour2 from "../../Assets/Images/WhatsApp Image 2024-08-24 at 15.00.35.jpeg"
import nour5 from "../../Assets/Images/WhatsApp Image 2024-08-24 at 14.38.16.jpeg"



export default function Portfolio() {


  return <>

<h1 className="text-uppercase  fw-bolder mt-4 mb-2 text-center">Portfolio Component</h1>
  <div className="starContent d-flex justify-content-center   p-3 align-items-center mb-5">
          <div className={`${Style.line1} `}></div>
          <i className={`${Style.starColor} fa-solid fa-star h5 mx-2 `}></i>
          <div className={`${Style.line1}`}></div>

         </div>
         

         <div className="container">

         <div className="row g-3 my-5">

         


          <div className="col-md-4">
 
            <div className={`${Style.card} position-relative`}>
              <img src={nour1} alt="" className='w-100 rounded-4'/>
              <div className={`${Style.layout} position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center  rounded-4`}>
              <i className={`${Style.plus} fa-solid fa-plus text-white`}></i>
              </div>
              </div>
            </div>
          <div className="col-md-4">
 
            <div className={`${Style.card} position-relative`}>
              <img src={nour5} alt="" className='w-100 rounded-4'/>
              <div className={`${Style.layout} position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center rounded-4`}>
              <i className={`${Style.plus} fa-solid fa-plus text-white`}></i>
              </div>
              </div>
            </div>
          <div className="col-md-4">
 
            <div className={`${Style.card} position-relative`}>
              <img src={nour2} alt="" className='w-100 rounded-4'/>
              <div className={`${Style.layout} position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center rounded-4`}>
              <i className={`${Style.plus} fa-solid fa-plus text-white`}></i>
              </div>
              </div>
            </div>
          <div className="col-md-4">
 
            <div className={`${Style.card} position-relative`}>
              <img src={nour5} alt="" className='w-100 rounded-4'/>
              <div className={`${Style.layout} position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center rounded-4`}>
              <i className={`${Style.plus} fa-solid fa-plus text-white`}></i>
              </div>
              </div>
            </div>
          <div className="col-md-4">
 
            <div className={`${Style.card} position-relative`}>
              <img src={nour2} alt="" className='w-100 rounded-4'/>
              <div className={`${Style.layout} position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center rounded-4`}>
              <i className={`${Style.plus} fa-solid fa-plus text-white`}></i>
              </div>
              </div>
            </div>
          <div className="col-md-4">
 
            <div className={`${Style.card} position-relative`}>
              <img src={nour1} alt="" className='w-100 rounded-4'/>
              <div className={`${Style.layout} position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center rounded-4`}>
              <i className={`${Style.plus} fa-solid fa-plus text-white`}></i>
              </div>
              </div>
            </div>

          </div>

         </div>
  
  
  </>




}
