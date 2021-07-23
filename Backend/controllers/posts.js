import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

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
    const { username,password,email,fullname, address, address2, city, state, zipcode,Gallons,Delivery_date} = req.body;

    const newPostMessage = new PostMessage({ username,password,email,fullname, address, address2, city, state, zipcode,Gallons,Delivery_date})

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { fullname,address, address2, city, state, zipcode ,gallonsRequired,date } = req.body;

// , address, address2, city, state, zipcode,Gallons,Delivery_date
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`user doesnt exists: ${id}`);

    const updatedPost = { fullname, address, address2, city, state, zipcode ,gallonsRequired,date, _id: id };
//

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true ,runValidators:true});

    res.json(updatedPost);
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