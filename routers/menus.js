const express = require('express');
const { Category } = require('../models/category');
const router = express.Router();
const { Menu } = require('../models/menu');
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
        cb(uploadError, 'public/uploads');
    },
    filename: function(req, file, cb) {

        const filename = file.originalname.split(' ').join('-');
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${filename}-${Date.now()}-${extension}`);
    }
})

const uploadOptions = multer({ storage: storage});





router.get(`/`, async (req, res)=> {
    // localhost:3000/api/v1/menus?categories=12335,458932    (query parameter)
    console.log('ici');
    let filter = {};

    if (req.query.categories)
    {
        filter = { category: req.query.categories.split(',') };
    }

    const menuList = await Menu.find(filter).select().populate('category');

    if (!menuList)
    {
        res.status(500).json({success: false});
    }
    res.send(menuList);
})


router.get(`/:id`, async (req, res)=> {
    const menu = await Menu.findById(req.params.id).populate('category');

    if (!menu)
        res.status(500).json({success: false});

    res.send(menu);
})


router.post(`/`, uploadOptions.single('image'), async (req, res)=> {

    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid Category');
    
    const file = req.file;
    if(!file)
     return res.status(400).send('No image in the request');
    

    const fileName = req.file.filename;
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

    let menu = new Menu({
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: `${basePath}${fileName}`,
        price: req.body.price,
        category: req.body.category,
        rating: req.body.rating,
    })

    menu = await Menu.save();
    
    if (!menu)
        return res.status(500).send('The menu cannot be created');

    res.send(menu);
})




router.put('/:id', uploadOptions.single('image'), async (req, res)=> {

    if (!mongoose.isValidObjectId(req.params.id))
    {
        res.status(400).send('Invalid menu Id');
    }

    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid Category');
 
    const menu = await Menu.findById(req.body.id);
    
    if(!menu)
        return res.status(400).send('Invalid menu');

    const file = req.file;
    let imagepath;

    if(file)
    {

        const fileName = req.file.filename;
        const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
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
            category: req.body.category,
            rating: req.body.rating,
        },
        {new: true}
    )

    if (!updatedmenu)
    return res.status(404).send('The menu with that id cannot be updated!');


    res.send(menu);;
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
        const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

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

    res.send(menu);

});


module.exports = router;