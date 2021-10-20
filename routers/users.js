const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get(`/`, async (req, res)=>{
    const userList = await User.find().select('name phone email preferenceGastrique');

    if(!userList)
        res.status(500).json({success: false });

    res.send(userList);
})


router.post(`/register`, async (req, res)=>{
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.passwordHash, 10),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        apartment: req.body.apartment,
        city: req.body.city,
        preferenceGastrique: req.body.preferenceGastrique,
    });

    user = await user.save();

    if(!user)
        return res.status(400).send('the user cannot be created');

    res.send(user);
})

router.get('/:id', async (req, res)=>{
    const user = await User.findById(req.params.id, '-passwordHash');

    if (!user)
        return res.status(500).json({message: 'the user with that id does not exist'});
    
    res.status(200).send(user);
})

router.delete('/:userId', (req, res)=>{
    User.findByIdAndRemove(req.params.userId).then(user => {
        if (user)
            return res.status(200).json({success: true, message: 'the user is deleted'});
        else  
            return res.status(404).json({success: false, message: "user not found"});;
    }).catch(err => {
        return res.status(400).json({success: false, error: err});
    })

})

router.get(`/get/count`, async (req, res)=>{
    const userCount = await User.countDocuments();

        if (! userCount)
            res.status(500).json({success: false})

    res.send({
        userCount: userCount
    });
})


router.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email});

    if (!user)
        return res.status(400).send('The user not found');

    if(user && bcrypt.compareSync(req.body.passwordHash, user.passwordHash))
    {
        const secret = process.env.secret;
        const token = jwt.sign({
            userId: user.id,
            isAdmin: user.isAdmin
        },
        secret,
        {expiresIn: '1d'}
        )
        
        res.status(200).send({user: user.email, token});
    }
    else 
    {
        res.status(404).send('wrong credentials provided');
    }

})



module.exports = router;