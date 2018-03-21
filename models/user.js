import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    latsName: String,
    email: String,
    cars: [{
        type: Schema.Types.ObjectId,
        ref: 'car'
    }]
});

const User = mongoose.model('user', userSchema)

export default User; 