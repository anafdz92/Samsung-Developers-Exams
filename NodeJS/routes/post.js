const express=require('express');
const router=express.Router();
const Post=require('../model/Post');

router.get('/',async(req,res)=>{
  try{
     const posts= await Post.find();
     res.json(posts)
  }catch(err){
      res.json({
          message:err
      });

  }
})

router.post('/',async(req,res)=>{
    const post= new Post({
        name:req.body.name,
        phone:req.body.phone
    })
    try{
    const savedPost= await post.save();
    res.json(savedPost)
    }
    catch(err){
        console.log(err);
        res.json( {
            message:err
        })

    }

    console.log(req.body);
})

module.exports=router;