import React from 'react';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './pages/product/Product';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/product/:id" element={<Product/>} />
            </Routes>
        </Router>
    )
}

export default App