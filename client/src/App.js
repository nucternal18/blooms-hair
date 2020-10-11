// @ts-nocheck
import React, {Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Nav/Navbar.jsx'
import Footer from './components/footer.components';
import Spinner from './components/spinner.component';
import ErrorBoundary from './components/error-boundary.component';

import Home from './pages/home.pages';
import AboutUs from './pages/about-us.pages';
import ServiceMenu from './pages/service-menu.pages';
import SpecialOffers from './pages/special-offers.pages';
import ContactUs from './pages/contact-us.pages';
import BookOnline from './pages/book-online.pages';
import './App.css';

const App = () => {
  return (
    <div >
      <Navbar />
      <Switch >
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Home} />
            <Route path='/about-us' component={AboutUs} />
            <Route path='/service-menu' component={ServiceMenu} />
            <Route path='/special-offers' component={SpecialOffers} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/book-online' component={BookOnline} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
