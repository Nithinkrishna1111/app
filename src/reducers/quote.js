export default (quotes=[],action)=>{
    switch (action.type){
        case 'FETCH_ALL_QUOTE':
            return action.payload;
        case 'CREATEQUOTE':
            return [...quotes,action.payload]
        case 'UPDATEQUOTE':
            return quotes.map((post) => (post._id === action.payload._id ? action.payload : post));

        default:
            return quotes

    }
}