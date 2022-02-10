import React from 'react';
import './Searchbar.css'
const Searchbar = () => {
    return (
        <div>
               <div className='search'>
                   <input className='serach-input' type="search" name="name " id="" />
                   <button className='search-button' type="submit"> Search </button>
               </div>
        </div>
    );
};

export default Searchbar;