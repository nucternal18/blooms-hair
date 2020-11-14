// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';


const BookOnline = () => {
    const [loaded, setLoaded] = useState(false);
    const scriptEl = useRef(null);

    useEffect(() => {
        // Append a script tag to the end of the div
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src =
          'https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqnC3SqD3OcT3qmV35y6RuSdBuOc1WJD1wOc1WO61CxdfcJE1wgEJgoapOUc8?v=qh0eNMTIPX8ySyDJjIpBpjlTyOUXZYCZK8zFuePxy3re#';
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
      <div className="bg-white flex-grow w-full ">
        <div ref={scriptEl} className="vagaro" >
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