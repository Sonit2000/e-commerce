
import './App.css';
import React from 'react';
import WebFont from "webfontloader"
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Home from './components/Home/Home'
import ProductDetails from './components/Product/ProductDetails'
import { Switch, Route } from "react-router-dom";
function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, [])
  return (
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
