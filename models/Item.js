const mongoose=require('mongoose');
const Schema =mongoose.Schema;


//create schema
const ItemSchema=new Schema({
    name:{
        type: String
    
    },
    tel:{
        type: Number
        
    },
    mail:{
        type: String
    }
});

module.exports=Item=mongoose.model('item', ItemSchema)

