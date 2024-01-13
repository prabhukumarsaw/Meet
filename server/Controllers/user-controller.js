import { User } from "../models/UserModel.js";

const createUser = async (req, res) => {
  const user = req.body;
  const query = { email: user.email };
  try {
    const existUser = await User.findOne(query);
    if (existUser) {
      return res.status(302).json({ message: "User Already Exist" });
    }

    const result = await User.create(user);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "data not sent, please check" });
  }
};

//---------------------get ALL USer Page LOGIC--------------------------------//

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "data not sent, please check" });
  }
};

//---------------------get ALL USer Page LOGIC--------------------------------//

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "data not sent, please check" });
  }
};

//---------------------get ALL USer Page LOGIC--------------------------------//

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user)
        {
            return res.status(404).json({ message: "User Not Found" });
        }

        return res.status(200).json({ message: "User Deleted Succesfully" });

    } catch (error) {
        console.log(error);
    res.status(500).json({ msg: "data not sent, please check" });
    }
}


//---------------------get Admin LOGIC--------------------------------//

const getAdmin = async (req, res) => {
  const email = req.params.email;
  const query = {email: email};
  try {
      const user = await User.findOne(query);
      // console.log(user)
      if(email !== req.decoded.email){
          return res.status(403).send({message: "Forbidden access"})
      }
      let admin = false;
      if(user ){
          admin = user?.role === "admin";
      }
      res.status(200).json({admin})
      
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};


//---------------------make Admin to user LOGIC--------------------------------//

const makeAdmin = async(req, res) => {
    const userId = req.params.id;
    const {name, email, photoURL, role} = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {role: "admin"},
            {new: true, runValidators:true}
        );

        if(!updatedUser)
        {
            return  res.status(404).json({ msg: "User Not FOund" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
    res.status(500).json({ msg: "please contact to admin" });
    }
}


export default { createUser, getAllUsers, getOneUser, deleteUser, getAdmin, makeAdmin };
