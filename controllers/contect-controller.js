import contactModel from "../model/contact.model.js";

const contact = async (req, res) => {
  const { name, lastname, contect, email, content } = req.body;
  const contactuser=await contactModel.findOne({email});
  if(contactuser){
    return res.status(404).json({success:"already submit data"});
  }

  const francisequire=await contactModel.create({ name, lastname, contect, email, content });
  return res.status(200).json({success:"contacy success"});
};

export default contact;
