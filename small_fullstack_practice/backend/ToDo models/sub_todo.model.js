import mongoose from 'mongoose';

const subtodoSchema = new mongoose.Schema(
    {
        content:{
            type: String,
            required: true,
        },
        complete:{
            type: Boolean,
            default: true,
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    }, {timestamps: true}
);

export const Subtodo = mongoose.model('Subtodo', subtodoSchema);