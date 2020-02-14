import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, CONTACT_LOADING, EDIT_CONTACT} from './types'
import axios from 'axios'


export const getContact=()=> dispatch =>{
    axios.get('/api/items').then(res=>
        dispatch({
        type: GET_CONTACT,
        payload: res.data
    })
    )
}
export const addContact=(contact)=>dispatch=>{
    axios.post('/api/items', contact).then(res=>
        dispatch(
            {
            type: ADD_CONTACT,
            payload:res.data
        }
        ))
}
export const removeContact=(id)=>dispatch=>{
    axios.delete(`/api/items/${id}`, id)
    .then(res=>
        dispatch(
            getContact()   
        ))
}
export const ModifyContact=(contact,id)=>dispatch=>{
    console.log(contact);
    axios.put(`/api/items/${id}`, contact)
   
    .then(res=>

        dispatch(
            getContact()
        )
        )
}

export const setContactLoading=()=>{
    return{
        type: CONTACT_LOADING
    }
}
