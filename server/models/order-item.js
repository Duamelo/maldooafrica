const mongoose = require('mongoose');


const orderItemSchema = mongoose.Schema({
    menuQuantity: {
        type:  Number,
        required: true
    },
    dishQuantity: {
        type:  Number,
        required: true
    },
    menu: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu'
    },
    dish: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
    }
});




orderItemSchema.virtual('id').get( function() {
    return this._id.toHexString();
});

orderItemSchema.set('toJSON', {
    virtuals: true,
});



exports.OrderItem = mongoose.model('OrderItem', orderItemSchema);

