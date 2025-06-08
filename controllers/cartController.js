const db = require('../db/db.js');

const addToCart = async(req,res)=>{
    const {u_id,product_id,quantity} = req.body;

    if(!u_id || !product_id || !quantity) {
        return res.json({success:false,messsage:"Missing fields"});
    }

    try{
        const existing = await db('cart').where({u_id,product_id}).first();
        if(existing){
            const [updated] = await db('cart').where({cart_id:existing.cart_id}).update({quantity: existing.quantity + quantity}).returning(['cart_id','u_id','product_id','quantity']);
            return res.json({success:true,cart:updated});
        }
        else{
            const [cart] = await db('cart').insert({u_id,product_id,quantity}).returning(['cart_id','u_id','product_id','quantity']);
            res.json({success:true,cart});
        }
    } 
    catch(error){
        res.json({success:false,messsage:error.messsage});
    }
}

module.exports = {addToCart};