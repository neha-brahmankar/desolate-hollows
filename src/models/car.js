import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const carSchema = new Schema({
    make: String,
    model: String,
    year: Number,
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Car = mongoose.model('car', carSchema)

export default Car; 