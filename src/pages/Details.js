import React from 'react';
import Intro from '../components/Intro';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar/Navbar';
import AboutMe from '../components/AboutMe';


const Details = () => {
    return (
        <div>
        <Navbar />
            <Intro />
            <AboutMe/>
            
            <Contact />
        </div>
    );
};

export default Details;
