const {Category} = require('../models/category');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    const categoryList = await Category.find();

    if (!categoryList)
        res.status(500).json({success: false});

    return  res.status(200).send(categoryList);
})

router.get('/:id', async (req, res)=>{
    const category = await Category.findById(req.params.id);

    if (!category)
        return res.status(404).json({message: 'the category with that id does not exist'});
    
    return res.status(200).send(category);
})

router.put('/:id', async (req, res)=> {
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
        },
        {new: true}
    )

    if (!category)
        return res.status(500).send('The category with that id cannot be updated!');


    return res.status(200).send(category);
})


router.post('/', async (req, res) => {

    const checkCategory = await Category.findOne({name: req.body.name});

    if(checkCategory)
        return res.status(400).send('this category already exist');

    let category = new Category({
        name: req.body.name,
    });

    category = await category.save();

    if (!category)
        return res.status(404).send('The category cannot be created!');

    return res.status(200).send(category);
})



router.delete('/:categoryId', (req, res)=>{
    Category.findByIdAndRemove(req.params.categoryId).then(category => {
        if (category)
            return res.status(200).json({success: true, message: 'the category is deleted'});
        else  
            return res.status(404).json({success: false, message: "category not found"});;
    }).catch(err => {
        return res.status(400).json({success: false, error: err});
    })
})

module.exports = router;