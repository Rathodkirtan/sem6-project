import cartSchema from '../model/cart.model.js'

const cart=async(req,res)=>{
  const item=await cartSchema.find();
  res.send(item);
}

export {cart}