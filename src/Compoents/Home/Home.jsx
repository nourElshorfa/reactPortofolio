

import React, { Component } from 'react'
import Style from "./Home.module.css"
import avatar from "../../Assets/Images/avataaars.svg"
export default class Home extends Component {


    state = {
        
    }
  render() {
    return <>
     
     <section className={`${Style.section}`}>
       <div className="homeContent d-flex justify-content-center align-items-center flex-column py-5 ">
         
         <img src={avatar} alt="" className="" width={300} />
         <h1 className="text-uppercase text-white fw-bolder my-3">Nour AbdelKareem</h1>
         <div className="starContent d-flex justify-content-between  p-3 align-items-center">
          <div className={`${Style.line1} `}></div>
          <i className="fa-solid fa-star h5 mx-2 text-white"></i>
          <div className={`${Style.line1}`}></div>
         </div>
         <p className="text-white h5 mb-5">FrontEnd Developer - ReactJS Developer - Javascript Developer</p>


       </div>
     </section>
       
    </>
  }
}
