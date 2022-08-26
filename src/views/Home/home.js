import React from "react";
import {Link} from "react-router-dom";
import Header from '../../components/Header/Header';

const Home = () => {

    return (
        <>

            <Header/>

            <Link to="/about" className="mx-2">About</Link>
            <Link to="/contact">Contact</Link>

        </>
    );
};

export default Home;
