<<<<<<< HEAD
import { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "./NavItems";
import "./Navbar.css";

export default function Navbar() {
    //const {navItems} = props;
    const [showSubMenu, setShowSubMenu] = useState([])

    const subMenuOnMouseEnterHandler = (subMenuId) => {
        setShowSubMenu((prev) => {
            let arr = [...prev]
            arr[subMenuId] = true
            return arr
        })
    }
    const subMenuOnMouseLeaveHandler = (subMenuId) => {
        setShowSubMenu((prev) => {
            let arr = [...prev]
            arr[subMenuId] = false
            return arr
        })
    }
    return (
        <nav className="navbar">
            <img id="logo" src="https://upload.wikimedia.org/wikipedia/he/thumb/4/42/Yad2_logo.svg/1200px-Yad2_logo.svg.png" alt="yad2 Logo"></img>

            <ul className="nav-items">
                {navItems.map((el)=> {
                if (!el.children) {
                    return (
                        <li key={el.id}>
                        <a href='#' className="nav-link">
                        {el.name}
                        </a>
                        </li>
                    )
                }
                return (
                    <li onMouseEnter= {() => subMenuOnMouseEnterHandler (el.id)} 
                        onMouseLeave= {() => subMenuOnMouseLeaveHandler (el.id)}
                        key={el.id} className="nav-options">
                      
                        <div className="nav-link">
                            {el.name}
                        </div>
                        <ul className="item-menu">
                            {showSubMenu[el.id] && el.children.map(ele => {
                                if(!ele.children){
                                    return (
                                        <div key={ele.id} className="sub-item">
                                         
                                            <div className="sub-item-link">
                                            {ele.icon &&<img src={ele.icon} alt="logo" className="menu-icon"/>}
                                                <span>{ele.name}</span>
                                            </div>
                                            <div  className="sub-item-link"> 
                                            {ele.name2}
                                            </div>
                                         </div>
                                    )
                                }   
                            })} 
                            </ul>
                            {/* <ul className="item-menus"> 
                            {showSubMenu[el.id] && el.children.map(item =>{
                                if(!item.children){
                                    return (
                                        <li key={item.id} className="sub-items">
                                            <div className="sub-items-link">
                                                <span>{item.name2}</span>
                                                </div>
                                        </li>
                                    )
                                }
                            })}
                            
                            </ul>
                            */}
                    </li>
                    
                )
                
                
            })}
            </ul>
            <img className="icon userimg" id="userimg" src="person.png" alt = "Person icons"></img> 
         <img className="icon" src="heart.png" alt = "Person icons"></img> 
         <img className="icon" src="bell.png" alt = "Person icons"></img>
    
         <Link to="new-ad">
    <button className="btn">+ Publishing New ad</button>
    </Link>
        </nav>
    )    
}

=======
import React, { useState } from "react"
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './Navbar.css'


export default function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };
      
     
    return (
        <>
            <nav className='navbar'>
                <Link to='/'><img src={require("../images/yad2logo.png")} className="navbar-logo" alt="This is a logo" 
                   onClick={closeMobileMenu}
                /></Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item"
                         onClick={onMouseEnter}
                        //  onMouseEnter={onMouseEnter}
                         onMouseLeave={onMouseLeave}
                    >
                        <Link className="nav-links" to='/secondhandmagazine'
                            onClick={closeMobileMenu}
                        >
                            Second Hand Magazine <i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>

                    <li className="nav-item">
                        <Link className="nav-links" to='/Professionals'
                            onClick={closeMobileMenu}
                        >
                            Professionals  
                        </Link>
                        {/* {dropdown && <Dropdown />} */}
                    </li>

                    <li className="nav-item">
                        <Link className="nav-links" to='/Pets'
                            onClick={closeMobileMenu}
                        >
                            Pets 
                        </Link>
                        {/* {dropdown && <Dropdown />} */}
                    </li>

                    <li className="nav-item">
                        <Link className="nav-links" to='/businessforsale'
                            onClick={closeMobileMenu}
                        >
                            Business For Sale 
                        </Link>
                        {/* {dropdown && <Dropdown />} */}
                    </li>

                    <li className="nav-item">
                        <Link className="nav-links" to='/ILneeded'
                            onClick={closeMobileMenu}
                        >
                            IL needed  
                        </Link>
                        {/* {dropdown && <Dropdown />} */}
                    </li>

                    <li className="nav-item">
                        <Link className="nav-links" to='/secondhand'
                            onClick={closeMobileMenu}
                        >
                            Second Hand 
                        </Link>
                        {/* {dropdown && <Dropdown />} */}
                    </li>

                    <li className="nav-item">
                        <Link className="nav-links" to='/vehicle'
                            onClick={closeMobileMenu}>
                            Vehicle 
                        </Link>
                        {/* {dropdown && <Dropdown />} */}

                    </li>
                    <li className="nav-item"
                       onClick={onMouseEnter}
                    //    onMouseEnter={onMouseEnter}
                       onMouseLeave={onMouseLeave}
                    >
                        <Link className="nav-links" to='/realestate'
                            onClick={closeMobileMenu}
                        >
                            Real Estate<i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>

                </ul>
            </nav>

            {/* <header> 
            <a href='#'>All Vehicles</a> <hr/>
            <a href='#'>Commercial</a>  <hr/>
            <a href='#'>Jeep</a> <hr/>
            <a href='#'>Motorcycles</a> <hr/>
            <a href='#'>Motorcycles</a> <hr/>

        </header> */}

        </>

    )
}
>>>>>>> d3673a580193d911cdce1a3e1442ad5e3d20de7a
