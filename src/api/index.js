import axios from 'axios'

const url = 'http://localhost:5000/posts'


export const fetchLogin=()=> axios.get(url);
export const createLogin=(newLogin)=> axios.post(url,newLogin)