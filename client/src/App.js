// @ts-nocheck
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';


// Components
import Navbar from './components/Nav/Navbar.jsx';
import Footer from './components/footer.components';
import Spinner from './components/spinner.component';
import ErrorBoundary from './components/error-boundary.component';

// Pages
import Home from './pages/home.pages';
import AboutUs from './pages/about-us.pages';
import ServiceMenu from './pages/service-menu.pages';
import SpecialOffers from './pages/special-offers.pages';
import ContactUs from './pages/contact-us.pages';
import BookOnline from './pages/book-online.pages';
import Gallery from './pages/Gallery.pages';
import Admin from './pages/Admin';
import Login from './pages/Login';

// Context
import { AuthProvider } from './context/context';

// Private Route
import AuthRoute from './utils/AuthRoute';

// CSS
import './App.css';

const App = () => {


  return (
    <AuthProvider>
      <main className='min-h-screen flex flex-col'>
        <Navbar />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={Home} />
              <Route exact path='/about-us' component={AboutUs} />
              <Route exact path='/service-menu' component={ServiceMenu} />
              <Route exact path='/special-offers' component={SpecialOffers} />
              <Route exact path='/contact-us' component={ContactUs} />
              <Route exact path='/book-online' component={BookOnline} />
              <Route exact path='/gallery' component={Gallery} />
              <AuthRoute path='/admin' component={Admin} />
              <Route exact path='/login' component={Login} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
        <Footer />
      </main>
    </AuthProvider>
  );
};

export default App;
