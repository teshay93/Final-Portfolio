import React from 'react';
import Intro from '../components/Intro';

import About from '../components/About';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/Card';

const Details = () => {
    return (
        <div>
        <Navbar />
            <Intro />
            <Card />
            <About />
            <Contact />
        </div>
    );
};

export default Details;
