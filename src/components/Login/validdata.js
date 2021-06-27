export default function validdata(values){
    let err={}
    if(!values.username.trim()){
        err.username="username required"
    }
    if (!values.email) {
        err.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        err.email = 'Email address is invalid';
    }
    if (!values.password) {
        err.password = 'Password is required';
    } else if (values.password.length < 6) {
        err.password = 'Password needs to be 6 characters or more';
    }

    if (!values.password2) {
        err.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
        err.password2 = 'Passwords do not match';
    }
    return err;
}
