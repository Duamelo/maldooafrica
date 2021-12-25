const express = require('express');
const router = express.Router();
const { Menu } = require('../models/menu');
const mongoose = require('mongoose');
const multer = require('multer');
const { Dish } = require('../models/dish');

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
        cb(uploadError, 'public/uploads/menus');
    },
    filename: function(req, file, cb) {

        const filename = file.originalname.split(' ').join('-');
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${filename}-${Date.now()}-${extension}`);
    }
})

const uploadOptions = multer({ storage: storage});





router.get(`/`, async (req, res)=> {

    const menuList = await Menu.find();

    if (!menuList)
    {
        return res.status(500).json({success: false});
    }

    return res.status(200).send(menuList);
})


router.get(`/:id`, async (req, res)=> {
    const menu = await Menu.findById(req.params.id).populate('entry, resistance, output');

    if (!menu)
        return res.status(500).json({success: false});

    return res.status(200).send(menu);
})


router.post(`/`, uploadOptions.single('image'), async (req, res)=> {

    const entry = await Dish.findById(req.body.entry);
    const resistance = await Dish.findById(req.body.resistance);
    const output = await Dish.findById(req.body.output);
    
    if(!entry) return res.status(400).send('Invalid entry dish');
    if(!resistance) return res.status(400).send('Invalid resistance dish');
    if(!output) return res.status(400).send('Invalid output dish');
    
    
    const file = req.file;
    if(!file)
     return res.status(400).send('No image in the request');
    

    const fileName = req.file.filename;
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/menus`;

    let menu = new Menu({
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: `${basePath}${fileName}`,
        price: req.body.price,
        entry: req.body.entry,
        resistance: req.body.resistance,
        output: req.body.output
    })

    menu = await menu.save();
    
    if (!menu)
        return res.status(500).send('The menu cannot be created');

    return res.status(201).send(menu);
})



router.put('/:id', uploadOptions.single('image'), async (req, res)=> {

    if (!mongoose.isValidObjectId(req.params.id))
    {
        res.status(400).send('Invalid menu Id');
    }

    const entry = await Dish.findById(req.body.entry);
    const resistance = await Dish.findById(req.body.resistance);
    const output = await Dish.findById(req.body.output);
    
    if(!entry) return res.status(400).send('Invalid entry dish');
    if(!resistance) return res.status(400).send('Invalid resistance dish');
    if(!output) return res.status(400).send('Invalid output dish');
    
    const menu = await Menu.findById(req.body.id);
    
    if(!menu)
        return res.status(400).send('Invalid menu');

    const file = req.file;
    let imagepath;

    if(file)
    {
        const fileName = req.file.filename;
        const basePath = `${req.protocol}://${req.get('host')}/public/uploads/menus`;
        imagepath = `${basePath}${fileName}`;
    }
    else{
        imagepath = menu.image;
    }

    const updatedmenu = await Menu.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: imagepath,
            price: req.body.price,
            entry: req.body.entry,
            resistance: req.body.resistance,
            output: req.body.output,
            rating: req.body.rating,
        },
        {new: true}
    )

    if (!updatedmenu)
        return res.status(404).send('The menu with that id cannot be updated!');


    return res.status(200).send(menu);;
})



router.delete('/:menuId', (req, res)=>{
    Menu.findByIdAndRemove(req.params.menuId).then(menu => {
        if (menu)
            return res.status(200).json({success: true, message: 'the menu is deleted'});
        else  
            return res.status(404).json({success: false, message: "menu not found"});;
    }).catch(err => {
        return res.status(400).json({success: false, error: err});
    })

})



router.get(`/get/count`, async (req, res)=>{
    const menuCount = await Menu.countDocuments();

        if (! menuCount)
            res.status(500).json({success: false})

    res.send({
        menuCount: menuCount
    });
})



router.put(
    '/gallery-images/:id', 
    uploadOptions.array('images', 10),
     async (req, res)=> {

        if (!mongoose.isValidObjectId(req.params.id))
        {
            res.status(400).send('Invalid menu Id');
        }

        const files = req.files;
        let imagesPaths = [];
        const basePath = `${req.protocol}://${req.get('host')}/public/uploads/menus`;

        if(files)
        {
            
            files.map( file =>{
                imagesPaths.push(`${basePath}${file.filename}`);
                console.log(file.filename);
            })
        }
        
    const menu = await Menu.findByIdAndUpdate(
        req.params.id,
        {
            images: imagesPaths 
        },
        {new: true}

    );

    if(!menu)
        return res.status(500).send('the menu cannot be updated!');

    return res.status(200).send(menu);

});


module.exports = router;