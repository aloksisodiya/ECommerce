const db = require('../db/db.js');

//create  product

const createProduct = async (req,res) => {
    const {price,name,description} = req.body;

    if(!name || !price || !description){
        return res.json({success:false,message:"Product can't be created, Provide proper information..."});
    }

    try{
        const [products] = await db('products').insert({name,price,description}).returning(['p_id','name','price','description']);
        res.json({success:true,products});
    }
    catch{
        res.json({success:false,message:error.message});
    }
}

//read product 
const getProduct = async (req,res) => {
    try{
        const products = await db('products').select('*');
        res.json({success: true, products});
    }
    catch{
        res.json({success:false,message:error.message});
    }
}

// update product 

const updateProduct = async (req,res) => {
    const {id} = req.params;
    const {name,price,description} = req.body;

    try{
        const [products] = await db('products').where({p_id:id}).update({name,price,description}).returning(['p_id','name','price','description']);
        if(!products){
            return res.json({success:false,message:"Oops! Product not Found"});
        }
        res.json({success:true,products})
    }
    catch(error){
        res.json({success:false,message:error.message});
    }
}

const deleteProduct = async (req,res) =>{
    const {id} = req.params;

    try{
        const deleted = await db('products').where({p_id:id}).del();
        if (!deleted) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.json({success:true,message:"product deleted successfully"});
    }
    catch(error){
        res.json({success:false,message:error.message});
    }
}

module.exports = {createProduct,getProduct,updateProduct,deleteProduct};