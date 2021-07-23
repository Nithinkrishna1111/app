import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';
import postquote from "../models/postquote.js";

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createPost = async (req, res) => {
    const { username,password,email,fullname, address, address2, city, state, zipcode} = req.body;

    const newPostMessage = new PostMessage({ username,password,email,fullname, address, address2, city, state, zipcode})

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );


    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { fullname,address1, address2, city, state, zipcode  } = req.body;

// , address, address2, city, state, zipcode,Gallons,Delivery_date
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`user doesnt exists: ${id}`);

    const updatedPost = { fullname, address1, address2, city, state, zipcode , _id: id };
//

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true ,runValidators:true});

    res.json(updatedPost);
}

export const createPost2 = async (req, res) => {
    const { id,gallonsRequired,date} = req.body;

    const newPostQuote = new postquote({id,gallonsRequired,date})

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