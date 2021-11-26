const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },

    detailPrice: {
        type: Number,
    },
    type: {
        type: String,
    },

    icon: {
        type: String,
    }
})



categorySchema.virtual('id').get( function() {
    return this._id.toHexString();
});


categorySchema.set('toJSON', {
    virtuals: true,
});


exports.Category = mongoose.model('Category', categorySchema);