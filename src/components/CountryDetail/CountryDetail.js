import React from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
    const {countryName} = useParams();
    
    return (
        <div>
            <h1 className='text-2xl'>Country Details for: {countryName}</h1>
            <p>{countryName.official}</p>
        </div>
    );
};

export default Country;