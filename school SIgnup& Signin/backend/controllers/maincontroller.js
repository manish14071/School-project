import signUp from "../model/mainSchema.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
const { jwt } = JWT;

export const validateSignup = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      dob,
      gender,
      standard,
      section,
      admission,
      english,
      hindi,
      math,
      science,
      history,
    } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const data = new signUp({
      firstname,
      lastname,
      email,
      password: hash,
      dob,
      gender,
      standard,
      section,
      admission,
      english,
      hindi,
      math,
      science,
      history,
    });

    const result = await data.save();
    res.send({ result, msg: "user created successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const validateSignin = async (req, res) => {
  try {
    const user = await signUp.findOne({
      admission: req.body.admission,
    });

    if (!user) {
      res.status(404).send("invalid credentials");
      return;
    } else {
      const match = await bcrypt.compare(req.body.password, user.password);
      const token = JWT.sign(req.body, "secret", {
        expiresIn: "1h",
      });
console.log(match)
      if (match) {
        
        res.send({
          token: token,

          msg: "login successful",
        });
      } else {
        res.send("wrong password");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDataByOne=async (req,res)=>{
  try {
    const {_id}=req.params
const find=await signUp.findById({_id:_id,})
res.send({find,msg:"data found"})
    
  } catch (error) {
    console.log(error)
    
  }
}


export const getUser = async (req, res) => {
  try {
    const get = await signUp.find();
    res.send({ get, msg: "users fetched successfully" });
  } catch (error) {
    console.log(error);
  }
};


export const logOut=async(req,res)=>{
  res.cookie('cookie', '', {
    expireIn: new Date(Date.now())
})
return res.status(200).json({ message: 'User Logout Successfully' })

}