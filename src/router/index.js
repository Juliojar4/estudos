import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home';
import ListProducts from '../pages/listProducts';
import Register from '../pages/registerProduct';

const Router = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/list" element={<ListProducts />}></Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
    );
};

export default Router;