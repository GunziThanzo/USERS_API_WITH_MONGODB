import express from "express";
import Post from "../models/Post.js"
const router = express.Router();

//Get all the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (err) {
        res.json({message: err.message })
    }
});

//Create a new post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    //To save it in our database =>

    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err.message});
    }

})

//Get specific post
router.get('/:postId', async (req,res) => {

   try{
       const post = await Post.findById(req.params.postId);
       res.json(post)
   } catch (err) {
       res.json({message: err.message})
   }
})


//Delete post
router.delete('/:postId', async (req, res) => {
    
    try {
        const removedPost = await Post.remove({ _id: req.params.postId })
        res.json(removedPost)
    } catch (err) {
        res.json({message: err.message})
    }
})

//Update post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, {$set: {title: req.body.title, description: req.body.description}}) 
        res.json(updatedPost)
    } catch (err) {
        res.json({message: err.message})
    }
})


export default router;