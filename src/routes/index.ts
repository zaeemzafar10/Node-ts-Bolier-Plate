import express from 'express';
import {userRoutes} from '../routes/user';

const router = express.Router() 



// router.use('/admin', require('./'))
router.use('/user', userRoutes)


export {
    router
}