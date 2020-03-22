import React from 'react';
import AdobeStock_123825321 from '../../Assets/images/AdobeStock_123825321.jpeg'

const  HomepageContainer = () => {
    return (
      <div className='container'>
        <div className='home-container'>
          <img src={AdobeStock_123825321} alt='' />
          <p>card 1</p>
        </div>
        <div className='home-container'>
          <img src={AdobeStock_123825321} alt='' />
          <p>card 1</p>
        </div>
        <div className='home-container'>
          <img src={AdobeStock_123825321} alt='' />
          <p>card 1</p>
        </div>
        <div className='home-container'>
          <img src={AdobeStock_123825321} alt='' />
          <p>card 1</p>
        </div>
      </div>
    );
}

export default HomepageContainer;
