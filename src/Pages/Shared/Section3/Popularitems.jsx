import React, { useEffect, useState } from 'react';
import Sectiontitle from '../Sectiontitle';
import Menuitem from '../Menuitem/Menuitem';

const Popularitems = () => {
    const [menu , setMenu]= useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const populatitem = data.filter(item=> item.category === 'popular');
            setMenu(populatitem)
        } )
    },[])
    return (
        <div>
            <div>
                <Sectiontitle headding={"FROM OUR MENU"} subheading={"---Check it out---"}></Sectiontitle>
            </div>
            <div className='grid grid-cols-2 gap-5'>
            {
                menu.map(item=> <Menuitem item={item} key={item._id}></Menuitem> )
            }
            </div>
        </div>
    );
};

export default Popularitems;