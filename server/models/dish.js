const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({

    categoryId: [{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }],
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        default: 0
    },

    description: {
        type: String,
        default:""
    },

    rate: {
        type: Number,
        default: 4
    },

    image:{
        type: String,
        default: ""
    },

    images:[{
        type: String,
        default: ""
    }],
})



dishSchema.virtual('id').get( function() {
    return this._id.toHexString();
});


dishSchema.set('toJSON', {
    virtuals: true,
});


exports.Dish = mongoose.model('Dish', dishSchema);