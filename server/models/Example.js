const { ObjectID } = require('mongodb')
const mongoose = require('mongoose')
const { Schema, model } = mongoose

const exampleSchema = new Schema({
    example: {
        type: String || Number || Array || Date || Map || Boolean || ObjectID,
        required: true || false,
        unique: true || false,
        trim: true || false,
        lowercase: true || false,
        minlength: exampleLength = require('../utils/randomInt')(),
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }
}, {
    timestamps: true
})
// This is a fix for a bug that might be old keep up to date with this
exampleSchema.methods.toJSON = function () {
    const example = this
    const userObject = example.toObject()

    delete exampleObject.password

    return exampleObject
}

// Only keep if example is something with a password -- Hash the plain text password before saving
exampleSchema.pre('save', async function (next) {
    const example = this

    if (example.isModified('password')) {
        example.password = await bcrypt.hash(example.password, 8)
    }

    next()
})

// Makes it so the model name is recognized
const Example = model('Example', exampleSchema)

module.exports = Example