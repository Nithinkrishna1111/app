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

export const updateUser = (id, users) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, users);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createUserQuote=(users)=>async(dispatch)=>{
    try{
        const{data}=await api.createLoginQuote(users);
        dispatch({type:'CREATEQUOTE',payload:data})
    } catch (error){
        console.log(error)

    }
}

export const getUsersQuote=()=>async(dispatch)=>{
    try{
        const {data }=await api.fetchLoginQuote();
        dispatch({type:'FETCH_ALL_QUOTE',payload:data})

    }catch (error){
        console.log(error.message)
    }



}

export const updateUserQuote = (id, users) => async (dispatch) => {
    try {
        const { data } = await api.updatePostQuote(id, users);

        dispatch({ type: 'UPDATEQUOTE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
