import express from  'express'
import {Admincontact,Adminfranchise,Adminuser} from '../controllers/Admincontact-controller.js'
import isLoggedIn from '../middleware/isloggin.js';

const router=express.Router();

router.route('/admin/contact').get(Admincontact)
router.route('/admin/franchise').get(Adminfranchise)
router.route('/admin/user').get(Adminuser)

export default router;