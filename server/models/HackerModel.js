import mongoose from "mongoose";

const HackerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        age: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// Use a more descriptive name for the model, like 'Hacker'
const HackerList = mongoose.model('Hacker', HackerSchema);
export { HackerList };

