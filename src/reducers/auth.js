const authReducer=(auth=[],action)=>{
    switch (action.type){
        case 'AUTH':
            console.log(action?.data)
            return [...auth,action.payload]

        default:
            return auth;
    }
}
export default authReducer