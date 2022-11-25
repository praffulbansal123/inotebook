import mongoose from "mongoose"
import mongooseUniqueValidator from "mongoose-unique-validator"
import bcrypt from "bcrypt";

const {Schema, model} = mongoose

/*
* @author Prafful Bansal
* @description User schema and model objects
*/
export const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: Number, required: true, unique: true}
}, {timestamps: true})

// Password hashing function
userSchema.pre('save', async function (next) {
    try {     
        const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUND));
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        return next();
    } catch (error) {
        return next(error);
    }
});

// unique fields validation
userSchema.plugin(mongooseUniqueValidator, {message: 'already taken'});

// Creating Model
const User = model('User', userSchema);

export default User;