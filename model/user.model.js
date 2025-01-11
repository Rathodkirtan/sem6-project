import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
  fullname:{
    type:String,
    require:true,
  },
  email:{
    type:String,
    require:true,
  },
  password:{
    type:String,
    require:true,
  },
  contact:{
    type:Number,
    require:true
  },
  address:{
    type:String,
    require:true
  },
  isAdmin:{
    type:Boolean,
    default:false,
  }
})

export default mongoose.model('user',userSchema);