const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db/db.js');

const register = async(req,res) => {
    const {name,email,password}=req.body;

     if(!name || !email || !password){
        return res.json({success:false, message:"Missing Details"})
    }

    try{
        const existingUser = await db('users').where({email}).first();
        if(existingUser){
            return res.json({message: 'Email already registered'});
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const [user] = await db('users').insert({name,email,password:hashedPassword}).returning(['id','name','email']);

        const token = jwt.sign({id: user.id, email: user.email},process.env.JWT_SECRET,{expiresIn:'8h'});

        res.cookie('token',token,{
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 8*60*60*1000
        });

        return res.json({success: true});

    } catch(error) {
        res.json({success: false, message:error.message})
    }
}

const login = async(req,res) => {
    const {email,password} = req.body;

    if(!email || !password){
        return res.json({success:false,message:"email and password are required"});
    }
    try{
        const user = await db('users').where({email:email}).first();

        if(!user){
            return res.json({success:false,message:"user not found"});
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success: false, message:'Invalid password'});
        }

        const token = jwt.sign({id: user.id},process.env.JWT_SECRET,{expiresIn:'8h'});
        res.cookie('token',token,{
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 8*60*60*1000
        });
        
        return res.json({success: true});

    } catch(error){
        return res.json({success: false,message:"something went wrong"});
    }
}

module.exports = {register,login};