const  express = require("express");
const router=express.Router();
const BookModel=require('../models/BookModel.js');

router.get('/',async(req,res)=>{
   BookModel.find().then(data=>{res.json(data)}).catch(e=>{
   res.json({message : e})});
});

router.post('/', async (req,res)=>{
  
    const bookModel = new BookModel({
        title: req.body.title,
        description: req.body.description
      });
    
    
      try {
        const savedData = await bookModel.save();
        res.json(savedData);
       
      } catch (err) {
        res.json({ message: err });
      }
});


router.delete('/:id',(req,res)=>{
  BookModel.deleteOne({_id :req.params.id}).then(data=>{res.json(data)}).catch(e=>{res.json({message: e})});
})

router.patch('/:id',(req,res)=>{
 BookModel.updateOne({_id:req.params.id}, {
   $set:{
       description:req.body.description,
       title:req.body.title
   }
 }).then(data=>{res.json(data)}).catch(e=>{res.json({message: e})});

} )



module.exports=router;