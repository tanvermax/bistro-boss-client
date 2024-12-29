import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Nvaber from '../Pages/Shared/Navber/Nvaber';

const Mainlayut = () => {
    return (
        <div>
            <Nvaber></Nvaber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayut;