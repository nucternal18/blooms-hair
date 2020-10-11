// @ts-nocheck
import React from 'react';
import AdobeStock_53052353 from '../Assets/images/AdobeStock_53052353.jpeg';
import Lauren from '../Assets/images/lauren-fleischmann-akfxOADwNhk-unsplash.jpg';
import HomepageContainer from '../Container/HomeContainer/HomeCard.container';



const Home = () => {
    return (
      <section
        className='bg-fixed w-full'
        style={{ backgroundImage: `url(${Lauren})` }}
      >
        <div className="homepage-card w-full">
      
        </div>
        <HomepageContainer />
      </section>
    );

}

export default Home;