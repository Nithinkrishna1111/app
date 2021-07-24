
import mongoose from 'mongoose';
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const postSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true,

    },
    password:{
        type:String,

    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }

    },
    fullname:{
        type:String,

    },
    address1:{
        type:String,

    },
    address2:String,
    city:{
        type:String,

    },
    state:{
        type:String,

    },
    zipcode:{
        type:Number,

    },
    gallonsRequired:{
        type:Number,

    },
    date:{
        type:Date,

    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]

})
postSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'softwaredesign')

    user.tokens = user.tokens.concat({ token })
    // console.log(user)
    // console.log(token)
    await user.save()

    return token
}


postSchema.statics.findByCredentials = async (username, password) => {
    const user = await PostMessage.findOne({ username })


    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)


    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}
postSchema.pre('save',async function (next){
    const user=this
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8)
    }
    next()
})

let PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;