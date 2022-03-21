import React from 'react';
import './Admin.css';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Link } from 'react-router-dom';
import book from '../Image/old-cozy-library-game-light-shadow-shelves-with-books-library_245974-445.webp';
const Admin = () => {
    return (
        <div className='admin-container'>
          
            <div className='sidebar'>
               <h4>Admin Option</h4>
                <div className='icon'>
                <AddIcon  /><Link to="/add"> <h5 className='icon-name' >Add Book</h5> </Link> 
            
                </div>
                <div className='icon' >
                <ViewListIcon  /><Link to="/lists"> <h5 className='icon-name' >Oder List</h5> </Link>
                </div>


                <div className='icon' >
                <DeleteIcon  /><Link to="/delete"> <h5 className='icon-name' >Delete Book</h5> </Link>
                </div>
                <div className='icon' >
                <SupervisorAccountIcon  /><Link to="/delete"> <h5 className='icon-name' >Add Admin</h5> </Link>
                </div>

            </div>
            <div className='right'>
             <h2>Hello Admin !</h2>

             <div className='admin-image' >
              <img src={book} alt="" />
             </div>


            </div>

        </div>
    );
};

export default Admin;