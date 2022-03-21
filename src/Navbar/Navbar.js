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

        
         <a  href="/lists"> Oders </a>
         <a href="/add"> Add  </a>
        
         <a href="/admin"> Admin </a>
       
      


        </div>
    );
};

export default Navbar;