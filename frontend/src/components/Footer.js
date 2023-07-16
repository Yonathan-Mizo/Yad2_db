import React from "react";
import { FooterData, realEstate, vehicle, secondHand, needed, moreOnTheSite, logoData, bottomPara, botttomColumn } from "./FooterData";
import "./footer.css";

function Footer() {
  return (
    <>
    <footer>
      <div className='footer--para'>
      {FooterData.map((item) =>(
            <p>{item.welcomeMsg}</p>
      ))}
      </div>
      <div className="footer--container"> 
        <div className="footer-menu">
         <h3>Real Estate</h3>
           <ul>
             {realEstate.map((item) => (
                <li key={item.name}>
                   <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
        </div>
        <div className="footer-menu">
          <h3>Vehicle</h3>
          <ul>
          {vehicle.map((item) => (
            <li key={item.name}>
              <a href={item.path}>{item.name}</a>
            </li>
              ))}
           </ul>
         </div>
       <div className="footer-menu">
        <h3>Second Hand</h3>
        <ul>
          {secondHand.map((item) => (
            <li key={item.name}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="footer-menu">
        <h3> Needed </h3>
        <ul>
          {needed.map((item) => (
            <li key={item.name}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="footer-menu">
        <h3>More On The Site</h3>
        <ul>
          {moreOnTheSite.map((item) => (
            <li key={item.name}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      </div>

      <div className='footer--icons'>
      {/* <a href="#"><img src="./images/apple.png"className="footer--logo"  /> </a> */}
        {logoData.map((item) => (
         <a href="#"><img src={ item.src} className="footer--logo"  /> </a>
        ))}
      </div>

      <div className='footer--p'> 
              {bottomPara.map((item) => (
                <p>{item.title}</p>
              ))}
      <div/>
            <hr/>
      <div className='col--last'>
        {botttomColumn.map((item) => (
          <a href="#"><h4> {item.title} </h4></a>
        ))} 
      </div>
      
      <div className='version'>
        <h3>Version: pro</h3>
       </div>
      
    </div>
  </footer>
  </>
  
  );
}

export default Footer;
