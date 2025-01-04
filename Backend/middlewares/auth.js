import jwt from 'jsonwebtoken'

const userAuth = async (req , res , next) => {
    const bearer = req.header('Authorization');
    
    if(!bearer){
        return res.status(400).json({message : 'No token here'})
    }
    const token = bearer.split(' ')[1]
    try {
        const user = await jwt.verify(token,process.env.SECRET_KEY);
        if(user){
            req.user = user
            next()
        }
        else return res.status(400).json({message:'Not authorise'})
    } catch (error) {
        return res.status(400).json(error)
    }
    
    

}

export default userAuth