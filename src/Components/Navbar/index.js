import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"

import Logo from "../../assets/images/logo.png"
import './Navbar.css';

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksHeight = useRef(null);

  useEffect(() => {
    const heightOfLinks = linksHeight.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${heightOfLinks + 30}px`;
      linksContainerRef.current.style.transition = "0.4s";
    }
    else{
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks])

  return (
    <>
      <nav className='shadow'>
        <div className='flex container'>
          <div className='flex-one'>
            <Link to="/" >
              <img className='logo' src={Logo} />
            </Link>
            
            <div className='burger' onClick={() => setShowLinks(!showLinks)}>
              <FaBars/>
            </div>
          </div>
          <div className='nav-links flex-two' ref={linksContainerRef}>
            <hr className='hr-navbar'/>
            <ul ref={linksHeight}>
              <li>
                <Link to="/about">
                    <a>Who We Are?</a>
                </Link>
              </li>
              <li>
                <Link to="/experiences">
                    <a>Experiences</a>
                </Link>
              </li>
              <li>
                <Link to="/sponsores">
                    <a>Sponsores</a>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                    <a>Contact</a>
                </Link>
              </li>
              <li>
                <Link to="/support">
                    <a>Support</a>
                </Link>
              </li>
              <li>
              <hr className='hr-navbar' />

              </li>
              <li>
                <button className='TR'>TR</button>
                <span className='slash-span'>/</span>
                <button className='EN'>EN</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    </>
  )
}

export default Navbar