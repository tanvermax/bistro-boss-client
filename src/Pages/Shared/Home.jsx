import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner';
import Section1 from './Section1/Section1';
import Sectioin2 from './Section2/Sectioin2';
import Popularitems from './Section3/Popularitems';
import Section4 from './Section4/Section4';
import Section5 from './Section5/Section5';
import Section6 from './Section6/Section6';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className='mx-auto'>
           <Helmet>
                <title>HOME</title>
            </Helmet>
           <Banner></Banner>
           <Section1></Section1>
          <div className='py-10'>
          <Sectioin2></Sectioin2>
          </div>
          <div className='py-5'>
            <Popularitems></Popularitems>
          </div>
          <Section4></Section4>
          <Section5></Section5>
          <Section6></Section6>
        </div>
    );
};

export default Home;