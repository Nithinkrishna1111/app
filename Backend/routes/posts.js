import express from 'express';

import { getPosts, createPost,updatePost,createPost2 } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id',updatePost);
router.post('/quote',createPost2)


export default router;