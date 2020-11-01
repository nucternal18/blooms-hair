// @ts-nocheck
import React from 'react';
import { motion } from "framer-motion";

// Images
import Lauren from '../Assets/images/lauren-fleischmann-akfxOADwNhk-unsplash.jpg';
// import homeImage from '../Assets/images/AdobeStock_53052353.jpeg';

// Containers
import HomepageContainer from '../Container/HomeContainer/HomeCard.container';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Home = () => {
    return (
      <section
        className='w-full'
      >
        <div className='homepage-card justify-center flex items-center text-3xl sm:text-6xl text-white font-bold text-center mb-0'>
          <motion.div
            className='opacity-75'
            initial='hidden'
            animate='visible'
            variants={variants}
            transition={{ duration: 2.0 }}
          >
            <p>Welcome to Blooms Hair</p>
          </motion.div>
        </div>
        <HomepageContainer />
      </section>
    );

}

export default Home;