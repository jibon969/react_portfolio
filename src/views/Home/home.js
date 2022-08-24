import React from "react";
import {Link} from "react-router-dom";

const Home = () => {

    return (
        <>

            <h3>Home Page </h3>

            <Link to="/about" className="mx-2">About</Link>
            <Link to="/contact">Contact</Link>

        </>
    );
};

export default Home;
