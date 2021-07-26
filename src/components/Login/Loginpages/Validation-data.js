
export default function Validationdata(values,users,isSub){
    let errors={}
    if(!values.username.trim()){
        errors.username="username required"
    }
    if(!values.password){
        errors.password="Password required"
    }
    else if (values.password.length<5){
        errors.password="Password too short"
    }
    else if (typeof users === 'undefined'){

        errors.userExists="Login not exists"
    }
    else if(typeof users !== 'undefined' && !isSub){
         errors.userExists="Username and Password doesn't match"
     }


    return errors;

}