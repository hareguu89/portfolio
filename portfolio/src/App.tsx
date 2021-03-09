import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeslaPage from './pages/TeslaPage';
import YarratrashmonstersPage from './pages/YarratrashmonstersPage';
import LouisPage from './pages/LouisPage';
import Footer from './components/home/Footer';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/tesla" component={TeslaPage} />
        <Route path="/yarratrashmonsters" component={YarratrashmonstersPage} />
        <Route path="/louis" component={LouisPage} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
