export default function validationRegister(values) {
    let errors = {}
    if (!values.gallonsRequired) {
        errors.Gallons = "Gallons required"
    }
    if (!values.date) {
        errors.Delivery_date = "Delivery date required"
    }

    return errors
}