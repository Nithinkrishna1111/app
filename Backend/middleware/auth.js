
import jwt from 'jsonwebtoken'
import PostMessage from "../models/postMessage.js";


const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'softwaredesign')
        const user = await PostMessage.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.user = user
        next()
    } catch (e) {

        res.status(401).send({ error: 'Please authenticate.' })
    }
}
export default auth