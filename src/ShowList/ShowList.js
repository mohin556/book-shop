import React from 'react';
import "./ShowList.css"
const ShowList = ({list}) => {
   console.log(list)
    return (
        <div>
          
        <div className='list-item' >
            <h4> Book: {list.book}</h4> 
            <h5> Price: {list.price}</h5>
            <img className='image-list' src={list.imageUrl} alt="" />

            <button>Delete</button>
        </div>
           
        </div>
    );
};

export default ShowList;