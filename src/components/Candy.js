import React from 'react';
import {Link} from 'react-router-dom';
import './Snack.css';

function Candy(){
    return(
        <div>
            <h1>Candy</h1>
            <p>Sweet!</p>
            <Link to="/">Go back to Vending Machine!</Link>
        </div>
    );
}

export default Candy;
