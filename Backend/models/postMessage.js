
import mongoose from 'mongoose';
import validator from 'validator'


const postSchema = mongoose.Schema({
    username:String,
    password:String,
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }

    },
    fullname:String,
    address1:String,
    address2:String,
    city:String,
    state:String,
    zipcode:String,
    gallonsRequired:Number,
    date:Date,

})

postSchema.pre('save',function (next){
    const user=this
    console.log('just before saving!')
    next()
})

let PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;