import React from 'react'
import {Link,NavLink} from 'react-router-dom';
import Logo from "../../images/logo.png"
import {links, Links} from "../../data";
import {GiHamburgerMenu} from "react-icons/gi"
import {MdOutlineClose} from "react-icons/md"
import "./navbar.css";
import { useState } from 'react';

const Navbar = () => {
const [isNavShowing,setIsNavShowing]=useState(false);

  return (
    <nav>
        <div className='container nav-container'>
            <Link to="/" className='logo'>
                <img src={Logo} alt='logo'/>
            </Link>
            <ul className={`nav-links ${isNavShowing ? 'show-nav':'hide-nav'}`}>
                {
                    links.map(({name,path},index)=>{
                        return(
                            <li key={index}>
                                <NavLink to={path} className={({isActive})=> isActive ? 'active-nav' : ''}>{name} </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className='nav-toggle-btn' onClick={()=>setIsNavShowing(!isNavShowing)}>
                
                {
                    isNavShowing ? <MdOutlineClose/> : <GiHamburgerMenu/>
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar