import mongoose from "mongoose";


//Describe the way the data looks
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

})

let Post =  mongoose.model('Post', PostSchema)

export default Post;