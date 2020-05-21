import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import './App.css';

class App extends React.Component {
 render(){
   return (
    <Switch>
      <Route exact path ='/'><Home /></Route>
    </Switch>
   )
 }
}

export default App;
