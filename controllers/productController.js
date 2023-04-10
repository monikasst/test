const { BatchType } = require("mongodb");
const Product = require("../model/Product");

// Add New product
const product_create = async (req, res) => {
  try { 
    let path = `public/uploads/${req.file.originalname}`;
    const product = new Product({
      title: req.body.title,
      price: req.body.price,
      image: path,
      details: req.body.details,
    });
    await product.save();
    res.send({
      message: "Product Created",
      statusCode: 200,
      data: product
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get All products
const product_all = async (req, res) => {
  try {
    const products = await Product.find();
    if(products.length > 0)
    {
      return res.status(200).json({
        message:"All product list",
        statusCode: 400,
        data: products
      });
    }else{
      res.status(404).json({
        message: "Product Not Found",
        statusCode: 404,
      }); 
    }
  } catch (error) {   
    res.json({ message: error });
  }
};

// Single product
const product_details = async (req, res) => {
  try {
      const product = await Product.findById(req.params.productId);      
      if(product.product !== '')
      {
        res.json({
          message: "Product Details",
          statusCode: 200,
          data: product
        });
      }else{
        res.status(404).json({
          message: "Product Details Not Found",
          statusCode: 404
        });
      }      
    } catch (error) {
      res.status(404).json({
        message: "Product Details Not Found",
        statusCode: 404
      });
    }
};

// Update product
const product_update = async (req, res) => {
  try {

    let path = `public/uploads/${req.file.originalname}`;
      const product = {
        title: req.body.title,
        price: req.body.price,
        image: path,
        details: req.body.details
      };
  
      const updatedProduct = await Product.findByIdAndUpdate(
        { _id: req.params.productId },
        product,
        {
          new : true
        }
      );
      updatedProduct.save(); 
      res.status(200).json({
        message: "Product update successfully",
        statusCode: 200,
        data: updatedProduct
      });     
      // res.json(updatedProduct);
    } catch (error) {
      res.status(404).json({ 
        message: "Enter Product Id is not found",
        statusCode : 404 
      });
    }
};

async function product_delete(req,res)
{
  try {
    const removeProduct = await Product.findByIdAndDelete(req.params.productId);
    res.status(200).json({
      message : "product delete successfully",
      statusCode : 200,  
    });
  } catch (error) {
    res.status(404).json({ 
      message: "Enter Product Id is not found",
      statusCode : 404 
    });
  }
}

module.exports = { product_create, product_all, product_details ,product_update, product_delete};
