import logo from './logo.svg';
import './App.css';
import React from 'react';

import Line from './Line.js';
import Header from './Header.js';
import Footer from './Footer.js';
import { render } from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Donut from './Donut';
import Score from './Score';
import Solo_courbes from'./Courbi'
import Navigation from './Navigation';
class App extends React.Component  {
  

     
    render() { 
        
      return ( 
         
        <div>
          
          <BrowserRouter>
        <div>
          <Header />
            <Switch>
          
          
          
          <Route exact path="/">
            <Home />
           </Route>
          
             <Route exact path="/home">
            <Home />
           </Route>
          
             <Route exact path="/courbes-simples">
          <Solo_courbes />
           </Route>
          
             <Route exact path="/donut">
          <Donut />
           </Route>
          
             <Route exact path="/score">
          <Score />
           </Route>
             
           </Switch>
        </div> 
      </BrowserRouter>
          <Footer></Footer>
</div>
      ); 
    } 
}

export default App;
