// @ts-nocheck
import React from 'react';
import { motion } from "framer-motion";
import Lauren from '../Assets/images/lauren-fleischmann-akfxOADwNhk-unsplash.jpg';
import HomepageContainer from '../Container/HomeContainer/HomeCard.container';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Home = () => {
    return (
      <section
        className='bg-fixed w-full'
        style={{ backgroundImage: `url(${Lauren})` }}
      >
        <div className='homepage-card w-full justify-center flex flex-col items-center text-2xl sm:text-6xl text-white font-bold'>
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