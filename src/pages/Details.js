import React from 'react';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar/Navbar';

const Details = () => {
    return (
        <div>
        <Navbar />
            <Intro />
            <Skills />
            {/* <About />
            <Contact /> */}
        </div>
    );
};

export default Details;
