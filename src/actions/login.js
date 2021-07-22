import * as api from '../api/index'
//Functionality


export const getUsers=()=>async(dispatch)=>{
    try{
        const {data }=await  api.fetchLogin();
        dispatch({type:'FETCH_ALL',payload:data})
    }catch (error){
        console.log(error.message)
    }



}

export const createUser=(users)=>async(dispatch)=>{
    try{
        const{data}=await api.createLogin(users);
        dispatch({type:'CREATE',payload:data})
    } catch (error){
        console.log(error)

    }
}