import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getContact, removeContact, onclickedit} from '../actions/contactAction'
import { Route, Link } from "react-router-dom";


class Forum extends Component{
    componentDidMount=()=>{
        this.props.getContact();
    }

    edit=(el)=> {
        this.props.transfert({_id:el._id, name:el.name, tel:el.tel, mail:el.mail})
    }


    render(){
     return(
     <div className="contactlist">

{this.props.contact.contacts.map(el => <div className="card" style={{width : "22rem"}}>
<div className="card-body">
 <p className="card-text">Contact Name : {el.name} </p>
 <p className="card-text">Contact Phone Number : {el.tel} </p>
 <p className="card-text">Contact Email : {el.mail} </p>

<div class="buttoncard">
<button type="button" class="btn btn-danger" onClick={()=>this.props.removeContact(el._id)}>Delete</button>
<Link to ={`/editcontact`} >
    <button type="button" class="btn btn-warning" onClick={()=>this.edit(el)} > Edit</button>
     </Link>
</div>
</div>
</div> )}
</div>
     

     )  
    }

}

const mapStateToProps=(state)=>({
contact:state.contact
})

const mapDispatchToProps=(dispatch)=>({
    getContact:()=>{
        dispatch(getContact())
    },
    removeContact:(id)=>{
        dispatch(removeContact(id))
    },

})
export default connect(mapStateToProps, mapDispatchToProps)(Forum);