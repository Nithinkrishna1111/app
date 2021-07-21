
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    username:String,
    password:String,
    email:String,
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;