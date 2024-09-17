import React from 'react'
import Style from "./Footer.module.css"
export default function Footer() {


    
  return <>
  
     <section className={`${Style.hidden} text-white text-center`}>

      <div className="row">

      <div className={`${Style.bgColor} col-md-4 p-5 `}>
      <h2>Location</h2>
          <h4>Cairo, Egypt</h4>
          <h4>0 1 0 1 4 6 6 5 5 7 5</h4>
      </div>


      <div className={`${Style.bgColor} col-md-4 p-5 `}>
      <h2>nourelshorafa20@gmail.com</h2>
          <div className="socialMedia  text-center">
            <ul className='list-unstyled d-flex  justify-content-center p-3'>
              <li><i className={`fab fa-facebook-f border p-3 mx-2 rounded-circle ${Style.facebook}`}></i></li>
              <li><i className={`fab fa-twitter border p-3 mx-2 rounded-circle ${Style.twitter}`}></i></li>
              <li><i className={`fab fa-linkedin border p-3 mx-2 rounded-circle ${Style.linkedin}`}></i></li>
              <li><i className={`fab fa-youtube border p-3 mx-2 rounded-circle ${Style.youtube}`}></i></li>

            </ul>
          </div>
      </div>


      <div className={`${Style.bgColor} col-md-4 p-5 `}>
      <h2>ABOUT FREELANCER</h2>
      <h4>Freelance is a free to use, licensed Bootstrap theme created by Route</h4>
      </div>

      <div className={`${Style.copyRightBgColor} col-md-12 p-3 `}>
        <h5>Copyright © Your Website 2024</h5>
      </div>
      </div>
     </section>

  
  
  </>
}
