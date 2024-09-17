import React, { useEffect } from 'react'
import Style from "./Navbar.module.css"
import { Link } from 'react-router-dom'


export default function Navbar() {
 
     useEffect(  ()=>{
       
      let aboutLink = document.getElementById("aboutLink")
      let PortfolioLink = document.getElementById("portfolioLink")
      let contactLink = document.getElementById("contactLink")

      PortfolioLink.addEventListener("click" , ()=> {
        PortfolioLink.classList.add(`${Style.active}`)
        contactLink.classList.remove(`${Style.active}`)
        aboutLink.classList.remove(`${Style.active}`)
      })

      contactLink.addEventListener("click" , ()=> {
        contactLink.classList.add(`${Style.active}`)
        aboutLink.classList.remove(`${Style.active}`)
        PortfolioLink.classList.remove(`${Style.active}`)
      })

      aboutLink.addEventListener("click" , ()=> {
        aboutLink.classList.add(`${Style.active}`)
        PortfolioLink.classList.remove(`${Style.active}`)
        contactLink.classList.remove(`${Style.active}`)
      })
  
     }   , [])


  return <>
 

  {/* <nav className="navbar bg-dark navbar-expand-lg navbar-light bg-light p-4"> */}
  <nav className={`${Style.test} navbar navbar-expand-lg navbar-light p-4`}>
    <div className="container">

  <Link className={`${Style.big} ${Style.remove} text-uppercase`} to="/">Start FrameWork</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className={` nav-item rounded-2 mx-2 p-2`} id='aboutLink'>
        <Link className={`${Style.semiBig} ${Style.remove}`} to="/about">About <span className="sr-only">(current)</span></Link>
      </li>
      <li className={` nav-item rounded-2 mx-2 p-2`} id='portfolioLink'>
        <Link className={`${Style.semiBig} ${Style.remove}`} to="/portfolio">Portofolio</Link>
      </li>
      <li className={` nav-item rounded-2 mx-2 p-2`} id='contactLink'>
        <Link className={`${Style.semiBig} ${Style.remove}`} to="/contact">Contact</Link>
      </li>
    
     
    </ul>
   
    </div>
  </div>
</nav>

  
  
  </>
}
