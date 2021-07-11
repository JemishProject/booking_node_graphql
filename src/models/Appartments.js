import mongoose from 'mongoose'

export const Appartments = mongoose.model("appartments", {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rooms: {
        type: Number,
        required: true
    },
    fromtime: {
        type: Date,
        required: true
    },
    totime: {
        type: Date,
        required: true
    }
})