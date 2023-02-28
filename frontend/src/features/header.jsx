import React from 'react'
import {BiUser, BiHeart, BiBell} from 'react-icons/bi'

export default function Header() {
    return(
        
        <div className='items'>
        <img id="logo" src="https://upload.wikimedia.org/wikipedia/he/thumb/4/42/Yad2_logo.svg/1200px-Yad2_logo.svg.png" alt="yad2 Logo"></img>
        <div className='wrapper'> 
        <p>real estate</p>
        <div className='more-items'>
        <div className='item-content'>
        <a class="link" href="#">Homes for Sale</a>
        <a class="link" href="#">Appartment for Rent</a>
        <a class="link" href="#">Partners</a>
        <a class="link" href="#">commercial</a>
        <a class="link" href="#">search on a map</a>
        <a class="link" href="#">Hand 1 new appartments</a>
        </div>
        <div className='item-content'>
        <a class="link" href="#">Daron - The profetioanal assiatant</a>
        <a class="link" href="#">receiver</a>
        <a class="link" href="#">property valuation</a>
        <a class="link" href="#">Real estate agencies in israel</a>

        </div>
        </div>
        </div>
            
            {/* <p>vihicle</p>
            <p>second hand</p>
            <p>IL needed</p>
            <p>Bussiness for sale</p>
            <p>pets</p>
            <p>more</p>
        
        <BiUser className='icon'/>
        <BiHeart className='icon'/>
        <BiBell className='icon'/>
        
        <button>+ publish a new app</button> */}
        </div>
    )
}