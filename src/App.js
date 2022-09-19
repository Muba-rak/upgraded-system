import './App.css';
import Homepage from './components/Homepage';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path = '/'>
            <Homepage />
          </Route>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/Project'>
            <Project />
          </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
        </Switch>
       
      </Router>
 
      

    </div>
  );
}

export default App;
