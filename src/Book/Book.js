import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookDetails from '../BookDetail/BookDetails';
import OderItem from '../OderItem/OderItem';
import OderList from '../OderList/OderList';
import './Book.css'
const Book = () => {
  const [book,setBook] = useState([]);
  // console.log(book)
  useEffect(() => {
    const url = 'http://localhost:5050/books';
    fetch(url)
         .then(res =>res.json())
       .then(data => setBook(data))
  },[]);

  



    return (
        <div className="main-container">
      

         {
             book.map(pd =><BookDetails pd={pd} ></BookDetails>
             
              )
         } 

        
       
        
         
       
            
        </div>
    );
};

export default Book;