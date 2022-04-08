import React from 'react';
import axios from 'axios';
import { useState} from 'react';

const Nav = props => {


return (<nav>
    <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    </nav>);
};

export default Nav;