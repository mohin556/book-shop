import React, { useEffect, useState } from 'react';
import ShowList from '../ShowList/ShowList';
import './OderList.css'
const OderList = ({pd}) => {
    const [list,setList] = useState([]);
    console.log(list)
useEffect(()=>{
    const url = `http://localhost:5050/lists`;
    fetch(url)
    .then(res => res.json())
    .then(data => setList(data))
},[])



    return (
       


        <div>
           {/* {
              list.map(list =>  <ShowList list = {list} ></ShowList> ) 
           } */}


          
           <div>
          <div className='list-heading' >
          <h2>Selected Items total : {list.length}</h2>
          </div>
           <table>
             <tr className="" >
                 <th className="nameList">
                 {
                    list.map(list => <ShowList list={list}  ></ShowList>)

                    //  list.map(list =><ul> Book : {list.book}  </ul>)
                  }
                  
                 </th>
                
                 {/* <th>Quantity</th>
                //  <th>Price</th> */}
             </tr>
             <tr id="" className="stylenew">
                 <td> 
                    
                      </td>
                
             </tr>
            
         </table>



           </div>




        </div>
    );
};

export default OderList;