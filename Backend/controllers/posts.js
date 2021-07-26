import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';
import postquote from "../models/postquote.js";
import auth from "../middleware/auth.js"

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();


        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPostss = async (req, res) => {
    res.send(req.user)
}

export const logout=async(req,res)=>{
    try{
        req.user.tokens(req.user.tokens.filter((token)=>{
            return token.token !== req.token
        }))
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }

}



export const createPost = async (req, res) => {
    const { username,password,email,fullname, address, address2, city, state, zipcode} = req.body;

    const newPostMessage = new PostMessage({ username,password,email,fullname, address, address2, city, state, zipcode})

    try {

        await newPostMessage.save();
        // const token=await newPostMessage.generateAuthToken()

        res.status(201).json({newPostMessage} );


    } catch (error) {
        res.status(409).json({ message: error.message })

    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
//     const { fullname,address1, address2, city, state, zipcode  } = req.body;
//
// // , address, address2, city, state, zipcode,Gallons,Delivery_date
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`user doesnt exists: ${id}`);
//
//     const updatedPost = { fullname, address1, address2, city, state, zipcode , _id: id };
// //
//
//     await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true ,runValidators:true});
//
//     res.json(updatedPost);


    const updates=Object.keys(req.body)
    const allowedUpdates=['password','fullname','address1', 'address2', 'city', 'state', 'zipcode' ]
    const isValidOperation=updates.every((update)=>allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error:'Invalid updates'})    }
    try{
        const user=await PostMessage.findById(req.params.id)
        updates.forEach((update)=>user[update]=req.body[update])

        await user.save()

        // const user =await PostMessage.findByIdAndUpdate(id,req.body,{ new: true ,runValidators:true})
        if(!user){
            return res.status(404).send()
        }
        res.json(user)
    }catch (e){
        res.status(400).send(e)
    }

}
export const login=async(req,res)=>{
    try {
        const user = await PostMessage.findByCredentials(req.body.username, req.body.password)
        console.log(user)
        // const token = await user.generateAuthToken()
        res.send({user})
    } catch (e) {
        res.status(400).send(e)
    }



}




export const updatePost2 = async (req, res) => {



    const updates=Object.keys(req.body)
    const allowedUpdates=['id','gallonsRequired','date','address','suggestedPrice' ]
    const isValidOperation=updates.every((update)=>allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error:'Invalid updates'})    }
    try{
        const user=await postquote.findById(req.params.id)
        updates.forEach((update)=>user[update]=req.body[update])

        await user.save()
        // const user =await postquote.findByIdAndUpdate(req.params,req.body,{ new: true ,runValidators:true})
        if(!user){
            return res.status(404).send()
        }
        res.json(user)
    }catch (e){
        res.status(400).send(e)
    }
}




export const getPosts2 = async (req, res) => {
    try {
        const postQuotes = await postquote.find();

        res.status(200).json(postQuotes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost2 = async (req, res) => {
    const { id,gallonsRequired,date,address,suggestedPrice} = req.body;

    const newPostQuote = new postquote({id,gallonsRequired,date,address,suggestedPrice})

    try {
        await newPostQuote.save();

        res.status(201).json(newPostQuote );


    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export default router;