import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1 className="text-5xl mt-5">Visit all countries in the world: {countries.length}</h1>
            <ul>
                {
                    countries.map(country => <li><Link
                    key={country.cca3}
                    to={`/country/${country.name.common}`}
                    ><p className='text-2xl'>{country.name.common}</p></Link></li>)
                }
            </ul>
        </div>
    );
};

export default Countries;