import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
    {
        content:{
            type: String,
            required: true,
        },
        complete:{
            type: boolean,
            default: false,
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        subtodo: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Subtodo",
            }
        ]// Array of subtodos
    }, {timestamps: true}
);


export const Todo = mongoose.model('todo', todoSchema) // when stored in db the model name will be todos