// @ts-nocheck
import React from 'react';
import { motion } from "framer-motion";


// Containers
import HomepageContainer from '../Container/HomeCard.container';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Home = () => {
    return (
      <section
        className='w-full flex flex-col'
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
        <div className="m-0">
          <HomepageContainer />
        </div>
      </section>
    );

}

export default Home;