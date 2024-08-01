import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import VendingMachine from './components/VendingMachine';
import Chips from './components/Chips';
import Candy from './components/Candy';
import Soda from './components/Soda';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<VendingMachine />} />
                <Route path="/chips" element={<Chips />} />
                <Route path="/candy" element={<Candy />} />
                <Route path="/soda" element={<Soda />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;