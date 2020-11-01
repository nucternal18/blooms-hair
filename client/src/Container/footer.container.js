import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

//Images
import AdobeStock_123825321 from "../Assets/images/AdobeStock_123825321.jpeg";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const FooterContainer = () => {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {/* Book Online */}
        <div
          className='w-full justify-center flex flex-col items-center h-48'
          style={{
            backgroundImage: `url(${AdobeStock_123825321})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '400px',
          }}>
          <p className='text-center text-white text-4xl font-bold'>
            Book Online
          </p>
          <div>
            <Link to='/book-online'>
              <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'>
                See More
              </button>
            </Link>
          </div>
        </div>
        {/* Service menu */}
        <div
          className='w-full justify-center flex flex-col items-center h-48 '
          style={{
            backgroundImage: `url(${AdobeStock_123825321})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '400px',
          }}>
          <p className='text-center text-white text-4xl font-bold'>
            Service Menu
          </p>
          <div>
            <Link to='service-menu'>
              <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'>
                See More
              </button>
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div
          className='w-full justify-center flex flex-col items-center h-48'
          style={{
            backgroundImage: `url(${AdobeStock_123825321})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '400px',
          }}>
          <p className='text-center text-white text-4xl font-bold'>
            Contact Blooms
          </p>
          <div>
            <Link to='/contact-us'>
              <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'>
                Contact Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='homecard-sm bg-transparent text-white justify-center flex items-center text-white font-bold text-center'>
        <motion.div
          className='opacity-75 z-50'
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ duration: 2.0 }}>
          <h2 className='text-4xl'>Let's Get Social</h2>
          <p>Keep up to date with Blooms Hair on our social media channels</p>
          <ul className=' flex justify-center'>
            <li className='px-1 py-2 m-1 hover:text-blue-500'>
              <a href='https://www.facebook.com/pages/category/Pizza-Place/Viaromanonsolopizza-108686514250214/'>
                <i className='fab fa-facebook text-4xl' />
              </a>
            </li>
            <li className='px-1 py-2 m-1 hover:text-blue-500'>
              <a href='https://www.instagram.com/viaromanonsolopizza/'>
                <i className='fab fa-instagram text-4xl' />
              </a>
            </li>
            <li className='px-1 py-2 m-1 hover:text-blue-500'>
              <a href='https://www.google.com/maps/place/viaROMAnonsolopizza/@45.7240617,8.6311318,15z/data=!4m5!3m4!1s0x0:0x6dc73345553ebfda!8m2!3d45.7240617!4d8.6311318'>
                <i className='fab fa-google text-4xl' />
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default FooterContainer;
