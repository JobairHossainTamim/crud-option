const  express = require("express");
const app = express();
const cors=require('cors');
const path=require('path')
const bodyParser = require('body-parser');
// mongoose
const mongoose=require("mongoose");
// Route
const booksRoute=require('./routes/books');

// Port
const PORT = 5000;
// mongoose
mongoose.connect(`mongodb+srv://tamim:tamim8210@cluster0.ylwaj.mongodb.net/test`, (event)=>{
    console.log(`Connected `);
}).catch(e=>console.log(e));



// App Require 
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.raw({ inflate: true, limit: '100kb', type: 'text/xml' }));
app.use(bodyParser.raw({type: 'application/json'}));
app.use(bodyParser.json())
// Handle Post



// Route
app.use('/books',booksRoute)


app.get("/", (req, res) => {});



app.listen(PORT, () => console.log("Server running on port " + PORT));