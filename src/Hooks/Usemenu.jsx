import React, { useEffect, useState } from 'react';

const Usemenu = () => {
    const [menu , setMenu]= useState([])
    const [loading , setLoading]= useState(true);

    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=>{
            setLoading(false);
            // const populatitem = data.filter(item=> item.category === 'popular');
            setMenu(data);

        } )
    },[])
    
    return [menu,loading];
};

export default Usemenu;