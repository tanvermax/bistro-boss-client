import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner';
import Section1 from './Section1/Section1';
import Sectioin2 from './Section2/Sectioin2';
import Popularitems from './Section3/Popularitems';

const Home = () => {
    return (
        <div className='mx-auto'>
           <Banner></Banner>
           <Section1></Section1>
          <div className='py-10'>
          <Sectioin2></Sectioin2>
          </div>
          <div className='py-5'>
            <Popularitems></Popularitems>
          </div>
        </div>
    );
};

export default Home;