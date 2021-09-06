
import { scryRenderedDOMComponentsWithClass } from 'react-dom/cjs/react-dom-test-utils.production.min';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Services from './component/Services';
// import Main from './component/Main';
import Skills from './component/Skills';
// import Services from './component/Services';
// // import Home from './Home';
import Contact from './component/Contact';
// import Home from './component/Home';
// import { Router } from 'react-router';

import New from './component/pages/New';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <>
      {/* <Router>
        <Navbar/>
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/skills">
            <Skills/>
          </Route>
          <Route exact path="/skills">
            <Skills/>
          </Route>
          <Route exact path="/services">
            <Services/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
        
      </Router> */}
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={New}/> 
          <Route path="/about" exact component={About}/> 
          <Route path="/skills" exact component={Skills}/> 
          <Route path="/Services" exact component={Services}/> 
          <Route path="/Contact" exact component={Contact}/> 
        </Switch>
      </Router>

    </>
  );
}

export default App;
