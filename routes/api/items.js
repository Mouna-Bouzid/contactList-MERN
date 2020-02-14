const express=require('express');
const router=express.Router();

//Item Model
const Item = require('../../models/Item')

//@route   Get api/item
//@desc    Get all Items
//@access  Public
router.get('/', (req,res)=>{
Item.find()
.sort ({ date:-1 })
.then(items =>res.json(items))
});

//@route   POST api/item
//@desc    Create a post
//@access  Public
router.post('/', (req,res)=>{
    const newItem= new Item({
   name:req.body.name, tel:req.body.tel, mail:req.body.mail
   })
   newItem.save().then(item=>res.json(item))
});

//@route   DELETE api/item/:id
//@desc    Remove an item
//@access  Public
router.delete('/:id', (req,res)=>{
    Item.findById(req.params.id)
    .then(item=>item.remove().then(()=> res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}))
});

//@route   UPDATE api/item
//@desc    Change a post
//@access  Public
router.put('/:id', (req,res)=>{

 const {name, tel, mail} = req.body
 const {id}= req.params
 Item.findOneAndUpdate(
     {_id:id}, {$set:{name, tel, mail}})
     .then(()=>res.json({success:true}))
     .catch(err=>console.log(err))
});

router.delete('/', (req,res)=>{
    Item.remove()
    .then(()=> res.json({success:true}))
    .catch(err=>res.status(404).json({success:false}))
});

module.exports = router;