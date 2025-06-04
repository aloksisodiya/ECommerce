const db = require('../db/db.js');

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

module.exports = {createProduct};