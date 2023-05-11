import React from "react" 
import "./hero.css";

export default function Hero() {
    return (
        <section className="hero">
            <p><span><strong>Updated today</strong></span></p>
            <div className="container">
            <div className="vital_info">
                <p> $84,000</p>
                <p>Hyundai i20</p>
                <p>Prestige Automatic 1.0 (100 cc)</p>
            </div>
            <div >
            <img src={require("../images/pexels-mike-b-120049.jpg")} className="hero_photo" alt="car here" /><br/>
            <img className="imgWhiteLogo" src={require("../images/yad2logoWhite.png")}  alt="whitelogo here" />
            </div>
            </div>
            <div className="lower_vital_info">
                <p>2010</p>
                <p>2</p>
                <p>1.591</p>
            </div>
            <div className="lower_vital_info_tag">
                <p>Year</p>
                <p cla>Hands</p>
                <p>cc</p>
            </div>
        </section>
    )
}