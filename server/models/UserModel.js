import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: String,
        email: {
            type: String,
            trim: true,
            minlength: 3
        },
        photoURL: String,
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        }
    }
)


// Use a more descriptive name for the model, like 'Hacker'
const User = mongoose.model('User', userSchema);
export { User };