
import './App.css';
import Form from './Form/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './Home/Home';
import Searchbar from './Searchbar/Searchbar';
import OderItem from './OderItem/OderItem';
import OderList from './OderList/OderList';
import Admin from './Admin/Admin';
import Delete from './Delete/Delete';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     {/* <Route path="/home">
       <Home></Home>
     </Route> */}
     <Route path="/" element={<Home />} />
     <Route path="/search" element={<Searchbar/>} />
     {/* <Route path="/form">
       <Form></Form>
     </Route> */}
     <Route path="/add" element={<Form />} />
     <Route path="/admin" element={<Admin/>} />
     <Route path="/lists" element={<OderList />} />
     <Route path="/delete" element={<Delete />} />
     <Route path="/yes/:id" element={<OderItem />} />
     <Route path="/odered/:id" element={<OderList />} />
    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
