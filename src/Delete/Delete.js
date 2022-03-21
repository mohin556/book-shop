import React, { useEffect, useState } from 'react';
import DeletList from './../DeletList/DeletList';
import './Delete.css'

const Delete = () => {

    const [books,setBooks] = useState([]);
    console.log(books)
    useEffect(()=>{
        const url = `http://localhost:5050/lists`;
        fetch(url)
        .then(res => res.json())
        .then(data => setBooks(data))


    },[])



    return (
        <div className='admin-container' >
             <div className='sidebar'>
                 <h3>Delete System</h3>
                 
                 </div> 
                 <div className='right'>
                   <h4 style={{color:'red'}} >Book Lists</h4>
                   <div className='delete-map' >
                       {
                           books.map(book => <DeletList book={book} /> )
                       }
                   </div>
                 

                 </div>
        </div>
    );
};

export default Delete;