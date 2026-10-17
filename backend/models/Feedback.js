
import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        course: {
            type: String,
            required: true,
            trim: true
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        comments: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
