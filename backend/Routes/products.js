const express = require('express');
const Product = require('../models/product');
const router = express.Router();
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "only-products",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });


router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post('/add-product', upload.single('image'), async(req, res)=>{
    try {
        const newProduct = new Product({
            name : req.body.name,
            price : req.body.price,
            rating: req.body.rating,
            category : req.body.category,
            image : req.file.path,
            desc : req.body.desc,
        })
        await newProduct.save()
        return res.status(200).json({message : 'Produit Ajouté'})
    } catch (error) {
        console.log(error)
        return res.status(400).json({message : 'Erreur interne du serveur'})
        
    }
})

module.exports = router;