import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import './OderItem.css';
const OderItem = ({pd}) => {
    console.log(pd)
  // const  {_id} = pd;
    const {id} = useParams();
    // console.log(id)
   const [book,setBook] = useState({});
   const [select,setSelect] = useState([])
   console.log(select)
//    console.log(book)
 
useEffect(()=>{
  const url = `http://localhost:5050/books`
  fetch(url )
  .then(res => res.json())
  .then( data => setSelect(data))

},[])

let newSelect = select.find(pd=>pd._id == id );

const checkout=()=>{
  const url =`http://localhost:5050/addlists`;
  fetch(url,{
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newSelect)
  })
  .then(res => {
                 alert('server side response', )
                 console.log(res)
                               })

  console.log("chekkkkkk")
}


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
     {/* <Link to={`/details/`} ><button  className="button" >Button</button> </Link> */}
  </div>
</div>

<div class="split right">
  <div class="centered">
    <h2>Checkout</h2>
   <div className='' >
          
   <Table className='table' >
  <thead className='t-head'>
    <tr>
      
      <th className='th'>Description</th>
      <th className='th' >Quantity</th>
      <th className='th'>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr className='t-body' >
      <td>Stuf You Should Know</td>
      <td>1</td>
      <td> 125 </td>
      
    </tr>
    <tr>
      <td>{book.book}</td>
      <td>2</td>
      <td>${book.price}</td>
     
    </tr>
    <tr className='table-last'>
      <td>Total</td>
      <td> </td>
      <td> {book.price} </td>
    </tr>
  </tbody>
</Table>



   </div>
  <Link to={`/lists`}>  <button className="button" onClick={checkout} >Checkout</button> </Link>
  </div>
</div>





        </div>
    );
};

export default OderItem;