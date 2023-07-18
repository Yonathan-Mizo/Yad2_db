import { useState } from 'react';
import "./cardetails.css"
import TickIcon from './BooleanValues/TickIcon'; 
import CrossIcon from './BooleanValues/CrossIcon';


const CarDetails = ({ car } ) => {
  const {price} = car;

  const [showHero2, setShowHero2] = useState(false);
  const [showHero, setShowHero] = useState(true); // new state variable to track visibility of hero div

  const handleClick = () => {
    setShowHero2(!showHero2); // toggle visibility of hero2 section
    setShowHero(!showHero); // toggle visibility of hero div
  };

  return (
    <div>
      <section className="hero" style={{ display: showHero ? 'block' : 'none' }} onClick={handleClick}>
        <div className="cardetails--container">
          <div className="vital_info">
            <p className="divider--price"> {price} </p>
            <div className="divider--enginesize">
              <p> {car.engineSize} </p>
              <p> {car.hand} </p> 
              <p className="divider--year"> {car.year} </p>
            </div>
            <div class="vl">
              <p> {car.name} </p>   
              <p>Prestige Automatic 1.0 (100 cc)</p>
            </div> 
          </div>

          <div className="hero--container">
            <img src= {car.images}  alt="car here" />
            <img className="imgWhiteLogo" src={require("../images/yad2logoWhite.png")}  alt="whitelogo here" />
          </div>
        </div>

        <div className="lower_vital_info_tag">
          <p>cc</p>
          <p cla>Hands</p>
          <p>Year</p>
        </div>
        <p><span><strong>Updated today</strong></span></p>
      </section>
  
      {showHero2 && (
        <>
        <section className="hero2" onClick={handleClick}>
          {/* <Dropdownad/> */}
          <div className="cardetails--container2">
            <div className="vital_info2">
              <p className="divider--price2"> {price} </p>
              
              <div className="vl2">
                <p> {car.name} </p>      
                <p>Prestige Automatic 1.0 (100 cc)</p>
              </div> 
              <div className="divider--enginesize2">
                <p> {car.engineSize} </p>
                <p> {car.hand} </p>
                <p className="divider--year2"> {car.year} </p>
              </div>
            </div>

            <div className="hero--container2">
              <img src= {car.images} alt="car here" />
              <img className="imgWhiteLogo2" src={require("../images/yad2logoWhite.png")}  alt="whitelogo here" />
            </div>
          </div>

          <div className="lower_vital_info_tag2">
            <p>cc</p>
            <p cla>Hands</p>
            <p>Year</p>
          </div>
          <p><span><strong>Updated today</strong></span></p>
          
        </section>
        <div className='Hero2B'>
             <p className='sales--area'>Sales area: {car.salesArea}</p>
             <hr style={{width:'625px'}}/>
             <div className="price--list" >
              <p className='price'>For the price list</p>
              <p className="vehicle">On the vehicle</p>
             </div>
             <p className='description'>{car.description}</p>
             {/* <hr/> */}
             <h2 className="more--details">
                More details   
             </h2>
             <div className="more--details--data">
               <div className="second--column">
                 <p className="second--column--mileage">Previous ownership<span className="second--column--mileage__value"> {car.previousOwnership}</span></p>
                 <p className="second--column--mileage">Gear<span className="second--column--mileage__value">{car.gearbox}</span></p>
               </div>
               <div className="first--column">
                 {/* <p>{car.mileAge}<span className="mileage">Mileage</span></p> */}
                 <p className="mileage">Mileage<span className="mileage__value">{car.mileAge}</span></p>
                 <p className="mileage">Engine Type<span className="mileage__value"> {car.engineType}</span></p>
                 <p className="mileage">Gearbox<span className="mileage__value"> {car.gearbox}</span> </p>
                 <p className="mileage">Color<span className="mileage__value"> {car.color}</span> </p>
                 <p className="mileage">Date on Road<span className="mileage__value"> {car.firstDay}</span> </p>
                 <p className="mileage">Test Until<span className="mileage__value"> { car.lastDay}</span></p>
               </div>
             </div>
               <p className='lower--para' style={{margin: "20px 0 0 320px"}}>(From second hand price list)<span >Armature</span> </p>
               <p style={{margin: "0px 0 0 10px"}}>For more information on price list</p>
              <div className='boolean__values'>
              {/* <p>Air Conditioner: {car.airConditioner ? '√' : '×'}</p>
          <p>Roof Window: {car.roofWindow ? '√' : '×'}</p>
          <p>Four Into Two: {car.fourIntoTwo ? '√' : '×'}</p> */}
          {/* <p>Air Conditioner: {car.airConditioner ? <TickIcon /> : <CrossIcon />}</p> */}
          <p>Air Conditioner: {car.airConditioner ?  <img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : <img src={"https://th.bing.com/th/id/OIP.yOIXDrSIivmrWrgDQ7C4pgHaHa?w=218&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7"}/>}</p>
          <p>Roof Window: {car.roofWindow ? <img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
          <p>Four Into Two: {car.fourIntoTwo ?<img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
          <p>Stability Control: {car.stabilityControl ?<img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
          <p>Tire Pressure sensors: {car.tirePressureSensors ?<img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
          <p>ABS: {car.abs ?<img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> :  <img img src={"https://th.bing.com/th/id/OIP.yOIXDrSIivmrWrgDQ7C4pgHaHa?w=218&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7"}/>}</p>
          <p> Power Steering: {car.powerSteering ?<img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : <img img src={"https://th.bing.com/th/id/OIP.yOIXDrSIivmrWrgDQ7C4pgHaHa?w=218&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7"}/>}</p>
          <p>Pedestrian Detection: {car.pedestrianDetection ?<img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
          <p>Belt Sensors: {car.beltSensors ?<img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
          <p>electricWindows: {car.electricWindows ?<img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
          <p>auxiliaryBrakeSystem: {car.auxiliaryBrakeSystem ?<img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
          <p>automaticLightning: {car.automaticLightning ?<img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
          <p>Magnesium Wheels: {car.magnesiumWheels ?<img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
              </div>
        </div>
        </>
        
      )}
    </div>
  );
};

export default CarDetails;