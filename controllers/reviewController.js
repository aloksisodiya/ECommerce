const db = require('../db/db.js');

const createReview = async (req,res) => {
    const {reviewer_name,rating,suggestion} = req.body;

    if(!reviewer_name || !rating){
        return res.json({success:false,message:"Missing Fields"});
    }

    try{
        const [review] = await db('reviews').insert({reviewer_name,rating,suggestion}).returning(['id','reviewer_name','rating','suggestion']);
        res.json({success:true,review});
    }
    catch(error){
        res.json({success:false,message:error.message});
    } 
}

const readReview = async (req,res) => {
    const {id} = req.params;

    try{
        const review = await db('reviews').where({id:id}).first();
        if(!review){
            return res.json({success:false,message:"review not found"});
        }
        res.json({success:true,review});
    }
    catch(error){
        res.json({success:false,message:error.message});
    }
}

module.exports = {createReview,readReview};