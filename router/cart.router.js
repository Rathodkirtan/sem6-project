import express from 'express'
import multer from 'multer'
import {cart,Addcategoties,cartDelete,cartUpdate} from '../controllers/cart-controller.js';

const router=express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,   uniqueSuffix + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.route('/getitem').get(cart);
router.route('/upload').post(upload.single('avatar'),Addcategoties);
router.route('/cartdelete/:id').get(cartDelete);
router.route('/cartupdate').post(upload.single('avatar'),cartUpdate)

export default router;