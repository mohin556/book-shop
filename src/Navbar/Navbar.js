import React from 'react';
import Icon from '../icons/Logo.png';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav" >
           <div> <img className='icon-image' src={Icon} alt="" />   </div>
           <a href="/"> Home </a>
         {/* <a href="/home"> Home  </a> */}

        
         <a  href=""> Oders </a>
         <a href="/form"> Admin </a>
         <a href="/login"> Login </a>
       
      


        </div>
    );
};

export default Navbar;