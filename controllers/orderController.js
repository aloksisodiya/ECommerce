const db = require('../db/db.js');

// create order
const createOrder = async (req,res)=>{
    const {order_by} = req.body;

    try{
        const [order] = await db('orders').insert({order_by}).returning(['o_id','order_date','order_by']);
        res.json({success:true,order});
    }
    catch(error){
        res.json({success:false,message:error.message});
    }
}

//read order by id
const readOrder = async (req,res)=>{
    const {id} = req.params;

    try{
        const order = await db('orders').where({o_id:id}).first();
        if(!order) return res.json({success:false,message:"order not found"});
        res.json({success:true, order});
    }
    catch(error){
        res.json({success:false,message:error.message});
    }
};

// update order 
const updateOrder = async (req,res) => {
    const {id} = req.params;
    const {order_by} = req.body;

    try{
        const [order] = await db('orders').update({order_by}).where({o_id:id}).returning(['o_id','order_by']);
        if(!order) return res.json({success:false,message:"order not found"});
        res.json({success: true,order});
    }
    catch(error){
        res.json({success:false,message:error.message});
    }
}

//delete order
const deleteOrder = async (req,res) =>{
    const {id} = req.params;

    try{
        const order = await db('orders').where({o_id:id}).del();
        res.json({success:true,message:"deleted successfully"});
    }
    catch(error){
        res.json({success:false,message:error.message});
    }
}

module.exports = {createOrder,readOrder,updateOrder,deleteOrder};