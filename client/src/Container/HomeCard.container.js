import React from "react";
import { motion } from "framer-motion";
//Images
import AdobeStock_123825321 from "../Assets/images/AdobeStock_123825321.jpeg";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const HomepageContainer = () => {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 '>
        <div className='py-4 px-8 bg-gray-700 flex flex-col justify-center'>
          <h1 className='text-white text-4xl mb-2 font-bold'>
            About Blooms Hair, London
          </h1>
          <p className='font-thin mb-4 text-white'>
            At Blooms Hair, we are passionate about making you feel special,
            every day. That’s why we offer a wide selection of quality services
            in our salon in Islington London. We have Wella Colour Master
            experts on hand that can deliver full hair colours to balayage’s and
            highlights, achieving your perfect shade is simple.
          </p>
          <p className='font-thin mb-4 text-white'>
            Get healthier, fuller looking hair with our Brazillian smoothing
            treatments. We love to provide you with the latest haircut trends
            and insider info too so that you can leave looking, and feeling
            fantastic!
          </p>
        </div>
        <div
          className='w-full justify-center flex flex-col items-center '
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/bloomshair-e4d4d.appspot.com/o/george-bohunicky-qJKT2rMU0VU-unsplash.jpg?alt=media&token=3ceb1c1f-3f91-434e-9cb8-b666310506d9)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '450px',
          }}>
          <p className='text-center text-white text-4xl font-bold'>
            New Offers Coming Soon
          </p>
          <div>
            <button className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent'>
              See More
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <div
          className='w-full justify-center flex flex-col items-center h-48'
          style={{
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/bloomshair-e4d4d.appspot.com/o/AdobeStock_278832769.jpeg?alt=media&token=44cc3645-356b-49bd-b6a0-c10946d158e0)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '400px',
          }}>
          <p className='text-center text-white text-4xl font-bold'>
            Book Online
          </p>
          <div>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'>
              See More
            </button>
          </div>
        </div>
        <div
          className='w-full justify-center flex flex-col items-center h-48 '
          style={{
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/bloomshair-e4d4d.appspot.com/o/AdobeStock_192477796.jpeg?alt=media&token=ebd28a93-5fb5-4feb-8244-b51c9617ce5d)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '400px',
          }}>
          <p className='text-center text-white text-4xl font-bold'>
            Service Menu
          </p>
          <div>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'>
              See More
            </button>
          </div>
        </div>
        <div
          className='w-full justify-center flex flex-col items-center h-48 '
          style={{
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/bloomshair-e4d4d.appspot.com/o/AdobeStock_208497707.jpeg?alt=media&token=cefd00a3-3c68-4e78-b8a2-ce76be627a8c)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '400px',
          }}>
          <p className='text-center text-white text-4xl font-bold'>
            About Blooms
          </p>
          <div>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'>
              See More
            </button>
          </div>
        </div>
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
            Meet The Team
          </p>
          <div>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'>
              See More
            </button>
          </div>
        </div>
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
            Visit Our Instagram
          </p>
          <div>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'>
              Visit Our Page
            </button>
          </div>
        </div>
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
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'>
              Contact Now
            </button>
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
          <ul className='flex justify-center '>
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

export default HomepageContainer;
