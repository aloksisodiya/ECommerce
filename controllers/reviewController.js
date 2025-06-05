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

module.exports = {createReview};