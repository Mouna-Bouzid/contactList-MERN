import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getContact, addContact} from '../actions/contactAction'
import { Route, Link } from "react-router-dom";
import {ModifyContact} from "../actions/contactAction"
// import e from 'express';

const initState = {name:'',tel:'',mail:''}

class Forum extends Component{

  constructor(props){
    super(props);
this.state=this.props.addingContact?{name:this.props.editcontact.name, tel:this.props.editcontact.tel, mail:this.props.editcontact.mail, id:this.props.editcontact._id}:initState
}

    componentDidMount=()=>{
        // this.props.getContact();
    }
    changehandle=(e)=>{
      this.setState({
      [e.target.name]:e.target.value
    })
    }

    render(){
     return(
    
    <div className="contactadd"   >
    <h2 > Add a Contact </h2>
    <form  >
    <div className="form-group">
  <label for="exampleInputPassword1">Contact Name</label>
  <input type="text" name="name" className="form-control" value={this.state.name} id="exampleInputPassword1" placeholder="Enter Contact Name" onChange={this.changehandle}/>
</div>
<div className="form-group">
  <label for="exampleInputPassword1">Contact Phone Number</label>
  <input type="text" name="tel" className="form-control" value={this.state.tel} id="exampleInputPassword1" placeholder="Enter Contact Phone Number"onChange={this.changehandle}/>
</div>

<div className="form-group">
  <label for="exampleInputEmail1">Email address</label>
  <input type="email" name="mail" className="form-control" value={this.state.mail} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"onChange={this.changehandle}/>
  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
</div>

<Link to ='/contactlist'> 
<button type="submit" className="btn btn-primary" onClick={this.props.addingContact?(()=>this.props.ModifyContact(this.state,this.state.id)):(()=>this.props.addContact(this.state))} > Submit</button>
 </Link>
</form>


    </div>
     )  
    }

}

const mapStateToProps=(state)=>({
contact:state.contact
})

const mapDispatchToProps=(dispatch)=>({

    addContact:(y)=>{
      dispatch(addContact(y))
    },
    ModifyContact:(contact,id)=>{
      dispatch(ModifyContact(contact,id))
  }

})
export default connect(mapStateToProps, mapDispatchToProps)(Forum);