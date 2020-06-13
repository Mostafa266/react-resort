import React from 'react';
import './App.css';
//Import Pages 
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
// import routing 
import {Route, Switch} from 'react-router-dom';
// Components
import Navbar from './components/Navbar';


function App() {
  return (

    // Documentation
    // exact =>> mean the url is exactlly what typen mean www.react.com/home -- www.react.com/home/room if you not using Exact - router will render to component - home and room 
    // using switch to all to us to Use route with no path to make a error page
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/rooms' component={Rooms}/>
      <Route exact path='/rooms/:slug' component={SingleRoom}/>
      <Route component={Error}/> {/*we use Switch to check if route not found navigate to ERROR page */}
    </Switch>
    </>
  );
}

export default App;
