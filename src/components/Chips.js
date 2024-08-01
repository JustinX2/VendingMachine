import React from 'react';
import {Link} from 'react-router-dom';
import './Snack.css';

function Chips(){
    return(
        <div>
            <h1>Chips</h1>
            <p>Crispy!</p>
            <Link to="/">Go back to Vending Machine!</Link>
        </div>
    );
}

export default Chips;