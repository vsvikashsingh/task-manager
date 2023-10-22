import mongoose from 'mongoose';

//defining schema for the tasks
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type:Boolean,
        default: false,
    }
})

//define model for the task schema for use to intract with database( through controllers logic)
export default mongoose.model('Task', TaskSchema)