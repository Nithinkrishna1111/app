
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    username:String,
    password:String,
    email:String,
    fullname:String,
    address:String,
    address2:String,
    city:String,
    state:String,
    zipcode:String,
    gallonsRequired:Number,
    date:Date,

})

let PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;