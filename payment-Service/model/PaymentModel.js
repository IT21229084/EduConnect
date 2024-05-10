
import mongoose from 'mongoose';
const { Schema } = mongoose;


const courseSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
});


const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true },
});


const paymentSchema = new Schema({
    amount: { type: Number, required: true },
    course: {
        type: courseSchema,
    },
    user: {
        type: userSchema,
    },
    created_at: { type: Date, default: Date.now },
});

export default mongoose.model("Payment", paymentSchema);

// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// // Define the payment schema
// const paymentSchema = new Schema({
//     amount: { type: Number, required: true },
//     course: {
//         type: Schema.Types.ObjectId,
//         ref: 'Course', // Reference to the Course model
//         required: true
//     },
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User', // Reference to the User model
//         required: true
//     },
//     created_at: { type: Date, default: Date.now },
// });

// export default mongoose.model("Payment", paymentSchema);



