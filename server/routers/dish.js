const {Dish} = require('../models/dish');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');


const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    destination: function(req, file, cb)  {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if(isValid)
        {
            uploadError = null;
        }
        cb(uploadError, 'public/uploads/dishs');
    },
    filename: function(req, file, cb) {

        const filename = file.originalname.split(' ').join('-');
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${filename}-${Date.now()}-${extension}`);
    }
})

const uploadOptions = multer({ storage: storage});


router.get('/', async (req, res) => {
    // localhost:3000/api/v1/dish?categories=12335,458932    (query parameter)
    let filter = {};

    if (req.query.categories)
    {
        filter = { category: req.query.categories.split(',') };
    }
    const dishList = await Dish.find(filter).select().populate('category');

    if (!dishList)
        res.status(500).json({success: false});

    return  res.status(200).send(dishList);
})


router.get('/:id', async (req, res)=>{
    const dish = await Dish.findById(req.params.id);

    if (!dish)
        return res.status(404).json({message: 'the dish with that id does not exist'});
    
    return res.status(200).send(dish);
})


router.post('/', uploadOptions.single('image'), async (req, res) => {

    const checkDish = await Dish.findOne({name: req.body.name});

    if(checkDish)
        return res.status(400).send('this dish already exist');


    const file = req.file;

    if(!file)
        return res.status(400).send('No image in the request');
    

    const fileName = req.file.filename;
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/dishs`;

    let dish = new Dish({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: `${basePath}${fileName}`,
        categoryId: req.body.categoryId
    });

    dish = await dish.save();

    if (!dish)
        return res.status(404).send('The dish cannot be created!');

    return res.status(201).send(dish);
})


router.put('/:id', uploadOptions.single('image'), async (req, res)=> {
   
    if (!mongoose.isValidObjectId(req.params.id))
    {
        res.status(400).send('Invalid dish Id');
    }
   

    const dish = await Dish.findById(req.body.id);
    
    if(!dish)
        return res.status(400).send('Invalid dish');

    const file = req.file;
    let imagepath;

    if(file)
    {

        const fileName = req.file.filename;
        const basePath = `${req.protocol}://${req.get('host')}/public/uploads/dishs`;
        imagepath = `${basePath}${fileName}`;
    }
    else{
        imagepath = dish.image;
    }


    const updateddish = await Dish.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: imagepath,
            rate: req.body.rate,
            categoryId: req.body.categoryId
        },
        {new: true}
    )


    if (!updateddish)
        return res.status(500).send('The dish with that id cannot be updated!');


    return res.status(200).send(dish);
})




router.put(
    '/gallery-images/:id', 
    uploadOptions.array('images', 10),
     async (req, res)=> {

        if (!mongoose.isValidObjectId(req.params.id))
        {
            res.status(400).send('Invalid dish Id');
        }

        const files = req.files;
        let imagesPaths = [];
        const basePath = `${req.protocol}://${req.get('host')}/public/uploads/dishs`;

        if(files)
        {
            
            files.map( file =>{
                imagesPaths.push(`${basePath}${file.filename}`);
                console.log(file.filename);
            })
        }
        
    const dish = await Dish.findByIdAndUpdate(
        req.params.id,
        {
            images: imagesPaths 
        },
        {new: true}

    );

    if(!dish)
        return res.status(500).send('the menu cannot be updated!');

    return res.status(200).send(dish);

});


router.delete('/:dishId', (req, res)=>{
    Dish.findByIdAndRemove(req.params.dishId).then(dish => {
        if (dish)
            return res.status(200).json({success: true, message: 'the dish is deleted'});
        else  
            return res.status(404).json({success: false, message: "dish not found"});;
    }).catch(err => {
        return res.status(400).json({success: false, error: err});
    })

})


module.exports = router;