export default function ValidationBasic(values){
    let errors={}
    if(!values.fullname.trim()){
        errors.fullname="fullname required"
    }
    else if(values.fullname.length>50){
        errors.fullname="Character length must not exceed 50 "
    }
    if(!values.address1){
        errors.address1="address required"
    }
    else if(values.address1.length>100){
        errors.address1="Character length must not exceed 100"
    }
    if(values.address2.length>100){
        errors.address2="Character length must not exceed 100"
    }
    if(!values.city){
        errors.city="City name is required"
    }
    else if(values.city.length>100){
        errors.city="Character length must not exceed 100"}

    if(!values.state){
        errors.state="State name is required"
    }
    if(!values.zipcode){
        errors.zipcode="zip code is required"
    }
    else if(values.zipcode.length<5){
        errors.zipcode="Atleast 5 character code required"
    }
    else if(values.zipcode.length>9){
        errors.zipcode="Character length must not exceed 9"
    }

    return errors;


}