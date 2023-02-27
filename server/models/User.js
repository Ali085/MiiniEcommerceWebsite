const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: false },
    cartNumber: { type: Number, required: false},
    cartMonth: { type: Number, required: false},
    cartYear: { type: Number, required: false },
    cvv: { type: Number, required: false},
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true }
)

module.exports = mongoose.model("User", userSchema)