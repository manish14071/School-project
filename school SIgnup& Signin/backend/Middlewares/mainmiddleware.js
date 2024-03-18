import JWT  from "jsonwebtoken";
 
 export const checkValidity=(req,res,next)=>{
    try {
        const token=req.headers.authorization.split(" ")[1]
        const decodeData=JWT.verify(token,"secret")
        if(decodeData){
            next();
        }
        
    } catch (error) {
res.status(401).send("Unauthorized Access")        
    }
 }