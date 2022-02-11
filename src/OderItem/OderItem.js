import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './OderItem.css';
const OderItem = ({pd}) => {
    console.log(pd)
  // const  {_id} = pd;
    const {id} = useParams();
    // console.log(id)
   const [book,setBook] = useState({})
//    console.log(book)
    useEffect(()=>{
    const url = `http://localhost:5050/yes/${id}`;
   
    fetch(url)
    .then(res => res.json())
    .then(data => setBook(data))


    },[])
    
    return (
        <div>
            {/* <h2> Id : {id}</h2>
            <h2> name : {book.book} </h2>
            <h2> name : {book.writer} </h2>
            <h2> name : {book.writer} </h2>
            <h2> name : {book.price} </h2>
            <img className="image" src={book.imageUrl} alt="" /> */}
            <div class="split left">
  <div class="centered">
  <img  src={book.imageUrl} alt="" />
    <h4> {book.book} </h4>
    <h4> cost : {book.price} $</h4>
    <p> <strong> {book.book} is very easy to learn. <br />
       Any one can learn easyli. Shortcut system </strong>
     </p>
     <Link to={`/details/`} ><button  className="button" >Button</button> </Link>
  </div>
</div>

{/* <div class="split right">
  <div class="centered">
   
    <h2>John Doe</h2>
    <p>Some text here too.</p>
  </div>
</div> */}




        </div>
    );
};

export default OderItem;