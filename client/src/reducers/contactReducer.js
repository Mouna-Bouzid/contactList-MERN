import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, CONTACT_LOADING, EDIT_CONTACT} from '../actions/types'
import { PromiseProvider } from 'mongoose'


const initialState={
contacts:[],
loading:false,
isEdit:false
}

const func=(state=initialState, action)=>{
switch(action.type){
    case GET_CONTACT : return {
        ...state,
        contacts:action.payload,
        loading:false 
    }
    
    case CONTACT_LOADING: return {
        ...state,
        loading:true}

    default: return state

}
}
export default func;