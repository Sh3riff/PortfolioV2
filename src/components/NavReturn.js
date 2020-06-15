import React from 'react';
import  { ReturnSVG } from '../components/SVG';

const NavReturn = () => {
    return ( <div onClick={ () => window.history.back() }><ReturnSVG/></div> )
}

export default NavReturn
