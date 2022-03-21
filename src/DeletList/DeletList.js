import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import "./DeletList.css"

const DeletList = ({book}) => {
  
    const handleDelete = (id) =>{
        const url = `http://localhost:5050/deletit/${id}`
        fetch(url,{
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data))
        
        
      }


    return (
        <div>
          <div className='delet-list' >
             <div className='delete-logo' >
          
                  <h4 className='delet-list' >{book.book}</h4> 
                  <button onClick={()=> handleDelete(`'${book._id}'`)} className="delete-button">Delete</button>
                  <DeleteIcon className='delete-icon' />

             
             </div>

          </div>
        </div>
    );
};

export default DeletList;