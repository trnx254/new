import mongoose from 'mongoose'

// Define favorite item schema
const favSchema = new mongoose.Schema({
    productId:{
        type: String,
        required: [true, "Please enter a product id"]
    },
    productName: {
        type: String,
        required: [true, "Please provide an item name"],
    },
    review: {
        type: String,
        required: [true, "Please provide a review"],
    },
    reviewOutOf: {
        type: String,
        required: [true, "Please provide a review out of"],
    },
    imgLink: {
        type: String,
        required: [true, "Please provide an image link"],
    },
});

// Define user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    favorites: [favSchema], // Array of favorite items
});

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User