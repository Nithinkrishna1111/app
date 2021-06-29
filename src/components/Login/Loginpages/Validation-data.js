
export default function Validationdata(values){
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


    return errors;

}