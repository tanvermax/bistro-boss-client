import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Nvaber from '../Pages/Shared/Navber/Nvaber';

const Mainlayut = () => {
    const location = useLocation();
    // console.log(location);

    const noHeaderfooter = location.pathname.includes('login') || location.pathname.includes('dashbord')
        return (
        <div className=''>
           { noHeaderfooter ||  <Nvaber></Nvaber>}
            <div className='min-h-screen mx-auto '>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayut;