import axios from 'axios'

const url = 'http://localhost:5000/posts'


export const fetchLogin=()=> axios.get(url);
export const createLogin=(newLogin)=> axios.post(url,newLogin)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// 60f9f66e6ddef91578785ec9