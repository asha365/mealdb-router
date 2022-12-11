import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Bars3Icon, XMarkIcon  } from '@heroicons/react/24/solid'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div onClick={ () => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static bg-gray-700 text-white w-full duration:500 ease-in ${open ? 'top-6' : 'top-[-300px]'}`}>
                <li><CustomLink to='/'>Home</CustomLink></li>
                <li><CustomLink to='/restaurant'>Restaurant</CustomLink></li>
                <li><CustomLink to='/friends'>Friends</CustomLink></li>
                <li><CustomLink to='/posts'>Posts</CustomLink></li>  
                <li><CustomLink to='/countries'>Countries</CustomLink></li> 
                <li><CustomLink to='/about'>About</CustomLink></li>  
            </ul>

        </nav>
    );
};

export default Header;