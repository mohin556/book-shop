import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';


import './Form.css'

const Form = () => {
  const [image,setImage] = useState(null)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
   
const eventData = {
  imageUrl : image,
  book  : data.name,
  writer : data.writer,
  price : data.price
 


}

const url = `http://localhost:5050/addimage`;
fetch(url,{
  method : 'POST',
  headers : {
    'content-type': 'application/json'
  },
  body : JSON.stringify(eventData)
})

.then(data => console.log(data))
    
    }
   
  const handleImageUpload = (e) =>{
    console.log(e.target.files[0])
    const ImageData = new FormData();
    ImageData.set('key','bf2f9d9f49f1a45f6bf78d11243b784f');
    ImageData.append('image',e.target.files[0])
   
    
// Make a request for a user with a given ID
axios.post('https://api.imgbb.com/1/upload', ImageData)
.then(function (response) {
  // handle success
  setImage(response.data.data.display_url);
})






  }

    return (
        <div className="form-container">
           <div className='formDiv'>
           <h3>Add New Book</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
   
      <input className="input" defaultValue="Book Name" {...register("name")} />
      <br />
      <input className="input" defaultValue="Writer Name" {...register("writer")} />
      <br />
      <input className="input" defaultValue="Price" {...register("price")} />
    <br />
      <input className="input" onChange={handleImageUpload}  type="file" />
     
    
      <br />
      <input type="submit" />
    </form>
           </div>

        </div>
    );
};

export default Form;