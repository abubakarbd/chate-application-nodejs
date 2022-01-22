const mongoose = require("express");

const peopleSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
    },
    mobile: {
        trpe: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    avater: {
        type: String,
    },
    role: {
        type: String,
        enum: ["admin","user"],
        default: "user",
    }
},
{
    timestamp: true,
}
);

const People = mongoose.model("People", peopleSchema);

module.exports = People;