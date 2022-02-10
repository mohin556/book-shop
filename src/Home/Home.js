import React from 'react';
import Book from '../Book/Book';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Searchbar></Searchbar>
            <Book></Book>
        </div>
    );
};

export default Home;