import express from 'express';

import {getPosts, createPost, updatePost, createPost2, getPosts2, updatePost2,login} from '../controllers/posts.js';
import auth from '../middleware/auth.js'
const router = express.Router();

router.get('/',auth, getPosts);
router.post('/', createPost);
router.patch('/:id',updatePost);
router.post('/quote',createPost2)
router.get('/quote',getPosts2)
router.patch('/quote/:id',updatePost2)
router.post('/login',login)


export default router;