import React from 'react';
import selfie2 from '../images/selfie2.png';

const Intro = () => {
    return (
      <div>
        <div className="description">
          <h2>Hey, I'm Ashley</h2>
          <p>I'm a creative Designer and Frontend Web Developer.</p>
          <button>contact me</button>
        </div>
        <img src={selfie2} alt="my face" />
      </div>
    );
};

export default Intro;
