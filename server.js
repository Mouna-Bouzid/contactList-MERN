const express= require('express');
const mongoose= require ('mongoose');
const bodyParser= require('body-parser');

const items=require('./routes/api/items')

const app=express();

// bodyParser Middleware
app.use(bodyParser.json())

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then (()=> console.log('mongo is connected...'))
.catch (err=> console.log(err));

//use routes
app.use('/api/items', items)

const port= process.env.PORT || 5000;

app.listen(port, ()=>console.log(`server started on port ${port}`))
