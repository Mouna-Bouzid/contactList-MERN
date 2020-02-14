import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Forum from './components/AddContact'
import ContacList from './components/Contactlist'
import { Route } from 'react-router-dom'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
    
    <div className="App">
      <Contact />
      {/* <Forum />
      <Route exact path='/contactList' component={ContacList}/> */}
    </div>
  
  );
}
}


export default App;
