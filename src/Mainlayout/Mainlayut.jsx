import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Nvaber from '../Pages/Shared/Navber/Nvaber';

const Mainlayut = () => {
    return (
        <div>
            <Nvaber></Nvaber>
            <div className='min-h-screen mx-auto '>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayut;