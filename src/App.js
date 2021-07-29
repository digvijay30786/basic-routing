import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './Components/Navbar/index';
import Home from './Components/home';
import About from './Components/about';
import Services from './Components/services';
import Contact from './Components/contact';
import Login from './Components/login';
function App() {
  return (
   <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
   </BrowserRouter>
  )
}




export default App