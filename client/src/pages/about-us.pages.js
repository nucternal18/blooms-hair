import React from 'react';
import FooterContainer from '../Container/footer.container';

const AboutUs = () => {
  return (
    <div className='flex-grow'>
      <div className="abt-img-card flex justify-center items-center font-bold text-white text-4xl sm:text-6xl">
        <h1>About Blooms</h1>
      </div>
      <div className='w-full   bg-white'>
        <div className='container mx-auto flex flex-col sm:flex-row'>
          <div className='w-full sm:w-2/4 my-6 py-6 px-4 flex flex-col justify-center items-center'>
            <h2 className='font-bold mb-4 text-4xl'>
              Here At Blooms Hair, We Are Passionate About Making You Feel
              Special, Every Day.
            </h2>
            <p className='font-thin text-2xl'>
              That’s why we offer a wide selection of quality services in our
              salon in Islington London. We have Wella Colour Master experts on
              hand that can deliver full hair colours to balayage’s and
              highlights, achieving your perfect shade is simple. Get healthier,
              fuller looking hair with our Brazillian smoothing treatments. We
              love to provide you with the latest haircut trends and insider
              info too so that you can leave looking, and feeling fantastic!
            </p>
          </div>
          <div className='w-2/4 hidden sm:block'></div>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default AboutUs;
