import React from 'react'
import Style from "./About.module.css"



export default function About() {



  return <>
  
    <section className=''>
     
     <div className="container">

    <div className="AboutContent d-flex justify-content-center align-items-center flex-column py-5 ">
       
      <h1 className="text-uppercase text-white fw-bolder my-3">About Component</h1>
      <div className="starContent d-flex justify-content-between  p-3 align-items-center">
          <div className={`${Style.line1} `}></div>
          <i className="fa-solid fa-star h5 mx-2 text-white"></i>
          <div className={`${Style.line1}`}></div>
         </div>
         <div className="row">

          <div className="col-md-6 p-4 my-5">
          <h4 className='text-white bold'>Seeking an opportunity where I can make the best of my potential and contribute to the 
organization growth and to build a long-term career in Web Development 
with opportunities for career growth.</h4>
          </div>

          <div className="col-md-6 p-4 my-5">
          <h4 className='text-white bold'>My Skills: HTML, CSS, JavaScript, Bootstrap , TailwindCss, ReactJS , NextJs, SASS , TypeScript , NodeJS, MongoDb, MySql , Mongoose , ORM</h4>
          </div>

         </div>
      
    </div>
     </div>

    </section>
  
  </>
}

