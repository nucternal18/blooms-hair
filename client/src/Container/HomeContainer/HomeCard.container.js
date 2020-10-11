import React from "react";
import AdobeStock_123825321 from "../../Assets/images/AdobeStock_123825321.jpeg";

const HomepageContainer = () => {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 '>
        <div className='py-6 px-8 bg-gray-700 '>
          <h1 className='text-white text-4xl mb-2 font-bold'>About Blooms Hair, London</h1>
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
            backgroundImage: `url(${AdobeStock_123825321})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "450px",
          }}
        >
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
            backgroundImage: `url(${AdobeStock_123825321})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "400px",
          }}
        >
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
            backgroundImage: `url(${AdobeStock_123825321})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "400px",
          }}
        >
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
            backgroundImage: `url(${AdobeStock_123825321})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "400px",
          }}
        >
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
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "400px",
          }}
        >
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
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "400px",
          }}
        >
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
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "400px",
          }}
        >
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
      <div className='homecard-sm bg-transparent'>

      </div>
    </>
  );
};

export default HomepageContainer;
