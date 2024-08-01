import React from 'react';
import {Link} from 'react-router-dom';
import './Snack.css';

function Soda(){
    return(
        <div>
            <h1>Soda</h1>
            <p>Bubbly!</p>
            <Link to="/">Go back to Vending Machine!</Link>
        </div>
    );
}

export default Soda;