const express = require('express');
const { OrderItem } = require('../models/order-item');
const { Order } = require('../models/orders');
const router = express.Router();
const mongoose = require('mongoose');
const { Menu } = require('../models/menu');
const { Dish } = require('../models/dish');



router.get(`/`, async (req, res)=>{
    const orderList = await Order.find().select()
    .populate('user', 'name').sort({'dateOrdered': -1})
    .populate({path: 'orderItems', populate: 'menu, dish'});

    if(!orderList)
        res.status(500).json({success: false });

    res.status(200).send(orderList);
})


router.get(`/:id`, async (req, res)=>{
    const order = await Order.findById(req.params.id).select()
    .populate('user', 'name')
    .populate({
        path: 'orderItems', populate: 'menu, dish'});

    if(!order)
        res.status(500).json({success: false });

    res.status(200).send(order);
})


router.post('/', async (req, res) => {

    const orderItemsIds = Promise.all(req.body.orderItems.map( async orderItem => {
        
        const checkMenu = await Menu.findById(orderItem.menu);
        const checkDish = await Dish.findById(orderItem.dish);

        if(!checkMenu) 
            return res.status(400).send('Invalid menu');

        if(!checkDish) 
            return res.status(400).send('Invalid  dish');
        
        let newOrderItem = new OrderItem({
            menuQuantity: orderItem.menuQuantity,
            dishQuantity: orderItem.dishQuantity,
            menu: orderItem.menu,
            dish: orderItem.dish
        })

        newOrderItem = await newOrderItem.save();

        return newOrderItem._id;
    
    }));

    const orderItemsIdsResolved = await orderItemsIds;

    const totalPrices = await Promise.all(orderItemsIdsResolved.map( async (orderItemId) =>{
        const orderItem = await OrderItem.findById(orderItemId)
                                .populate('menu', 'price')
                                .populate('dish', 'price');
        const totalPrice = orderItem.menu.price * orderItem.menuQuantity + orderItem.dish.price * orderItem.dishQuantity;
        return totalPrice;
    }))

    const totalPrice = totalPrices.reduce((a,b) => a + b, 0);
    
    console.log(totalPrices);

    //console.log(orderItemsIdsResolved);

    let order = new Order({
        orderItems: orderItemsIdsResolved,
        deliveryAdresse1: req.body.deliveryAdress1,
        city: req.body.city,
        deliveryContact: req.body.deliveryContact,
        totalPrice: totalPrice,
        user: req.body.user,
    });

    order = await order.save();

    if (!order)
        return res.status(404).send('The order cannot be created!');


    return res.status(201).send(order);
})



router.put('/:id', async (req, res)=> {
    const order = await Order.findByIdAndUpdate(
        req.params.id,
        {
            state: req.body.state,
            statut: req.body.statut 
        },
        {new: true}
    )

    if (!order)
        return res.status(404).send('The order with that id cannot be updated!');


    return res.status(200).send(order);
})



router.delete('/:orderId', (req, res)=>{

    if(!mongoose.isValidObjectId(req.params.id))
        return res.status(400).json("Invalid Id");

    Order.findByIdAndRemove(req.params.orderId).then(async order => {
        if (order)
        {
            await order.orderItem.map( async orderItem => {
                await OrderItem.findByIdAndDelete(orderItem).then( order => {
                    if (order)
                        console.log('OK');
                }).catch(err)
                    return res.status(500).json({success: false, error: err});
                
            })
            return res.status(200).json({success: true, message: 'the order is deleted'});
        }   
        else  
            return res.status(404).json({success: false, message: "order not found"});;
    }).catch(err => {
        return res.status(500).json({success: false, error: err});
    })

})


router.get('/get/totalsales', async (req, res) => {
    const totalSales = await Order.aggregate([
        { $group: {_id: null, totalsales: { $sum: '$totalPrice'}}}
    ])
 
    if(!totalSales)
    {
        return res.status(400).json('The order sales cannot be generated');
    }
    res.send({totalsales: totalSales.pop().totalsales})
})


router.get(`/get/count`, async (req, res)=>{
    const orderCount = await Order.countDocuments();

        if (! orderCount)
            res.status(500).json({success: false})

    res.send({
        orderCount: orderCount
    });
})

router.get(`/get/userorders/:userid`, async (req, res)=>{
    const userOrderList = await Order.find({user: req.params.userid}).select()
    .populate('user', 'name')
    .populate({
        path: 'orderItems', populate: 'menu, dish'}
        ).sort({'dateOrdered': -1});

    if(!userOrderList)
        return res.status(500).json({success: false });

    return res.send(userOrderList);
})


module.exports = router;