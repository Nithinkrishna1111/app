export default function validationRegister(values) {
    let errors = {}
    if (!values.Gallons) {
        errors.Gallons = "Gallons required"
    }
    if (!values.Delivery_date) {
        errors.Delivery_date = "Delivery date required"
    }

    return errors
}