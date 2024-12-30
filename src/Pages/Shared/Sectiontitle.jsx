import React from 'react';

const Sectiontitle = ({headding, subheading}) => {
    return (
        <div  className='w-2/5 mx-auto text-center space-y-5 py-5'>
            <p className='text-yellow-400 italic'>{subheading}</p>
            <hr />
            <h3>{headding}</h3>
            <hr />
        </div>
    );
};

export default Sectiontitle;