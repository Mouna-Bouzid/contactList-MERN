import React, { Component } from 'react';
import AddContact from './AddContact'
import { Route,Switch, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Contactlist from './Contactlist'
// import Modifycontact from './modifycontact'

class Contactapp extends Component {
    constructor(props) {
        super(props)
        this.state={
          editcontact :"",
          addingContact:false
        }
     
           }

    statetransfert=(data)=>{
     this.setState({
       editcontact:data,
       addingContact: true
      })
    }
  
  handleClick = () => {
    this.setState({ addingContact: true });
  };

  render() {
    return (
      <Router>
      <div className="contactnav" >
      <h1> Welcome to my Contact App </h1>
      <div className="buttonform">
     
      <Link to="/contactlist"> <button type="button" className="btn btn-secondary">Contact List</button> </Link>
      <Link to="/addcontact"> <button type="button" className="btn btn-success" > Add Contact</button> </Link>
      </div>

      <Switch>
        <Route exact path="/addcontact"  render={() => <AddContact editAddContact={this.state.addingContact}/>}/> 
        <Route exact path="/contactlist"  render={() => <Contactlist handleClick={this.handleClick} transfert={this.statetransfert} />} /> 
        <Route exact path="/editcontact" render={() => <AddContact handleClick={this.handleClick} addingContact={this.state.addingContact} editcontact={this.state.editcontact} />} /> 
      </Switch>
   
      </div>
      </Router>


    );
  }
}

export default Contactapp ;