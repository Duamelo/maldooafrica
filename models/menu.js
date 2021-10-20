
const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type:String,
        required: true
    },
    richDescription: {
        type: String,
        default:""
    },
    image: {
        type: String,
        default:""
    },
    images:[{
        type: String,
        default: ""
    }],
    price: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0,
    },

    category: [{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }],
    dateCreated: {
        type: Date,
        default: Date.now
    }

})


menuSchema.virtual('id').get( function() {
    return this._id.toHexString();
});

menuSchema.set('toJSON', {
    virtuals: true,
});


exports.Menu = mongoose.model('Menu', menuSchema);

