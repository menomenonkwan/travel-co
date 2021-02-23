import './App.css';
import React, {useEffect, useState} from 'react';
import Background from './assets/Background.js';
import Nav from './components/Nav';
import Home from './components/Home';
import Travel from './components/Travel';
import Tips from './components/Tips';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { HashRouter, Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { generateReviewer } from './assets/Utils';

function App() {
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [safety, setSafety] = useState({});

  useEffect(() => {
    generateReviewers();
  }, []);
  
  useEffect(() => {
    fetchTips();
  }, []);

  const generateReviewers = (numReviews = 3) => {
    const people = Array.from({length: numReviews}, generateReviewer);
    setEmployees(people);
  }

  const fetchTips = async () => {
    const data = await fetch('https://www.travel-advisory.info/api');
    const items = await data.json();
    setSafety(items.data);
  }

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Background />
      <Nav />  
      <AnimatePresence exitBeforeEnter> 
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Home} />
          <Route path="/travel">
            <Travel cart={cart} setCart={setCart} />
          </Route>
          <Route path="/tips">
            <Tips safety={safety} />
          </Route>
          <Route path="/about">
            <About employees={employees} />
          </Route>
          <Route path="/contact" component={Contact} />
          <Route path="/cart">
            <Cart cart={cart} setCart={setCart} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence> 
      <Footer />
    </div>
    </HashRouter>
  );
}

export default App;
