
import mongoose from 'mongoose';
import validator from 'validator'


const postSchema2 = mongoose.Schema({

    id:String,
    gallonsRequired:Number,
    date:Date,
    address:String,
    suggestedPrice:String

})

// postSchema2.pre('save',function (next){
//     const user=this
//     console.log('just before saving!')
//     next()
// })

let postquote = mongoose.model('postquote', postSchema2);

export default postquote;