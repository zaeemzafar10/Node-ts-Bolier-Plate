import express from 'express';
import  {createUser , getUsers , updatedUser,DeletedUser }  from '../controllers/user';
const userRoutes = express.Router();

userRoutes.post('/create', createUser);
userRoutes.get('/get', getUsers)
userRoutes.put('/update/:id', updatedUser)
userRoutes.delete('/delete/:id', DeletedUser)


export {
    userRoutes
}