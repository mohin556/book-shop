import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './OderItem.css';
const OderItem = () => {
    const {id} = useParams();
    console.log(id)
   const [book,setBook] = useState({})
   console.log(book)
    useEffect(()=>{
    const url = `http://localhost:5050/yes/${id}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => setBook(data))


    },[])
    
    return (
        <div>
            <h2> Id : {id}</h2>
            <h2> name : {book.book} </h2>
            <h2> name : {book.writer} </h2>
            <h2> name : {book.writer} </h2>
            <h2> name : {book.price} </h2>
            <img className="image" src={book.imageUrl} alt="" />
        </div>
    );
};

export default OderItem;