const db = require('../db/db.js');

const addToCart = async(req,res)=>{
    const {u_id,product_id,quantity} = req.body;

    if(!u_id || !product_id || !quantity) {
        return res.json({success:false,messsage:"Missing fields"});
    }

    try{
        const product = await db('products').where({p_id:product_id}).first();
        if(!product){
            return res.json({success:false,messsage:"Product not found"});
        }
        if(product.stock<quantity){
            return res.json({success:false,message:"Oops! why you think so much, now not enough stock"});
        }

        const existing = await db('cart').where({u_id,product_id}).first();
        if(existing){
            const [updated] = await db('cart').where({cart_id:existing.cart_id}).update({quantity: existing.quantity + quantity}).returning(['cart_id','u_id','product_id','quantity']);
            return res.json({success:true,cart:updated});
        }
        else{
            const [cart] = await db('cart').insert({u_id,product_id,quantity}).returning(['cart_id','u_id','product_id','quantity']);
            res.json({success:true,cart});
        }

        await db('products').where({p_id:product_id}).decrement('stock',quantity);
        res.json({success:true,message:"stock updated"});
    } 
    catch(error){
        res.json({success:false,messsage:error.messsage});
    }
}

module.exports = {addToCart};