
import './App.css';
import Form from './Form/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './Home/Home';
import Searchbar from './Searchbar/Searchbar';
import OderItem from './OderItem/OderItem';

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
     <Route path="/form" element={<Form />} />
     <Route path="/yes/:id" element={<OderItem />} />
    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
