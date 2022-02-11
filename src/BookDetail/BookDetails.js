import React from 'react';
import './BookDetails.css'
import { Link } from 'react-router-dom';

const BookDetails = ({pd}) => {
    // console.log(pd)
    const {imageUrl,book,writer,price,_id} = pd;
   
    return (
        <div className="home-card" >
         <div className="imageDiv">
         <img className="image" src={imageUrl} alt="" />
         </div>
          <div className="namediv">
          <h4> {book} </h4>
            <h6 className='writer'> {writer}  </h6>
          </div>
          <div className='btndiv' >
         <div className='dollar'>

            ${price} 
         </div>  
         <Link to={`/yes/${_id}`} ><button  className="button" >Button</button> </Link>
          {/* <button className="button"   > <Link to="psg" /> Buy Now </button> */}
          </div>
        </div>
    );
};

export default BookDetails;