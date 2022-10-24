import express from "express";
import bodyParser from "body-parser"
import mongoose from "mongoose";
import postsRoute from "./routes/posts.js";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postsRoute);


//Routes
app.get('/', (req, res) => {
    res.send("We are on home")
})


//Connect to DB

const CONNECTION_URL = 'mongodb+srv://gunzi:Gunzithanzo9971@user-api.pcm4twz.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, () => {
    console.log("connected to DB")
})

app.listen(5000)