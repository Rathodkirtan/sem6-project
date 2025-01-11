import express from 'express'
import {cart} from '../controllers/cart-controller.js';

const router=express.Router();

router.route('/getitem').get(cart);

export default router;