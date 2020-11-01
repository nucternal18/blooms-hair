// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';

const frameOne = {
  fontSize: '23px',
  color: '#333',
  fontFamily: 'Arial Helvetica sans-serif',
  lineHeight: '24px',
  padding: '18px 10px 8px',
  textAlign: 'center',
  WebkitBoxSizing: 'border-box',
  MozBoxSizing: 'border-box',
    boxSizing: 'border-box',
};

const vagaroOne = {
  width: '550px',
  padding: '0',
  border: '0',
  margin: '0 auto',
  textAlign: 'center',
};


const BookOnline = () => {
    const [loaded, setLoaded] = useState(false);
    const scriptEl = useRef(null);

    useEffect(() => {
        // Append a script tag to the end of the div
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src =
            'https://www.vagaro.com/resources/WidgetEmbeddedLoader/OZqnC3SqD3OcT3qmV35y6RuSdBuOc1WJD1wOc1WO61CxdfcJE1wgEJgoapOUcO?v=yi584aLayi52goDIOuLLIjDCTSo0aHa2iozlQ84g67v0#';
        script.async = true;
        scriptEl.current.appendChild(script);
        setLoaded(true);
    }, []);
    useEffect(() => {
      if (typeof window !== 'undefined' && loaded) {
        // Reference the function stored in the window object 
        let loadWindow = window.loadWindow;
        window.addEventListener('load', loadWindow, false, { passive: true });
      }
    }, [loaded]);

    return (
      <div className="BackDrop flex-grow">
        <div id="frameTitle" className="embedded-widget-title" style={frameOne}>
        </div>
        <div ref={scriptEl} className="vagaro text-white" style={vagaroOne}>
          <a href='https://sales.vagaro.com/'>Powered by Vagaro</a>&nbsp;
          <a href='https://sales.vagaro.com/salon-software'>Salon Software</a>
          ,&nbsp;
          <a href='https://sales.vagaro.com/spa-software'>Spa Software</a>
          &nbsp;&amp;&nbsp;
          <a href='https://sales.vagaro.com/fitness-software'>
            Fitness Software
          </a>
        </div>
      </div>
    );
}

export default BookOnline;