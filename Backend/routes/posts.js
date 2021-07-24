import express from 'express';

import {getPosts,getPostss, createPost, updatePost, createPost2, getPosts2, updatePost2,login,logout} from '../controllers/posts.js';
import auth from '../middleware/auth.js'
const router = express.Router();

router.get('/', getPosts);
router.get('/me',auth, getPostss);
router.post('/', createPost);
router.patch('/:id',updatePost);
router.post('/quote',createPost2)
router.get('/quote',getPosts2)
router.patch('/quote/:id',updatePost2)
router.post('/login',login)
router.post('/logout',auth,logout)

export default router;