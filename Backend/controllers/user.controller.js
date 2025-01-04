import user from "../models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const signup = async (req , res) => {
    const userData = req.body

    const {username , email} = userData
    try {
        const existName = await user.findOne({username})
        if(existName) {
            return res.status(400).json({message:'Username already exists'})
        }
        const existMail = await user.findOne({email})
        if(existMail) {
            return res.status(400).json({message:'Email already exists'})
        }

        const hashpassword = await bcrypt.hash(userData.password , 10)
        
        const newUser = new user({username , email , password:hashpassword})
        const addUser = await newUser.save()
        return res.status(200).json(addUser)
        
        

    } catch (error) {
        return res.status(400).json(error)
    }
}

const login = async (req , res) => {
    const {email , password} = req.body;
    

    try {
        const checkUser = await user.findOne({email}).select('+password')
        
        if(!checkUser){
            return res.status(400).json({message : 'User not exists'})
        }
        
        const isSame = await bcrypt.compare(password , checkUser.password)
        
        if(isSame){
            const token = await jwt.sign({id : checkUser._id , email} , process.env.SECRET_KEY , {expiresIn:'2h'})
            return res.status(200).json({message : 'Login succesfull' , token})
        }
        
        return res.cookie('token', token, {
            httpOnly: true, 
            maxAge: 3600 * 2000 
        }).status(400).json({message : 'Invalid email or password'})
    } catch (error) {
        
        return res.status(400).json(error)
    }
}

const getUser = async (req , res) => {
    const id = req.user.id;
    if(!id) return res.status(400).json({message : 'Unauthorized'})
    try {
        const userData = await user.findById(id)
        return res.status(200).json(userData)
    } catch (error) {
        return res.status(400).json(error)
    }
}

export {signup , login , getUser}