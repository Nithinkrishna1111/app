export default (users=[],action)=>{
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...users,action.payload]
        case 'UPDATE':
            return users.map((post) => (post._id === action.payload._id ? action.payload : post));
        default:
            return users

    }
}