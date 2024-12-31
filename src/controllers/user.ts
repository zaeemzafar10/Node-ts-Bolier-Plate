import express,{Request , Response} from 'express';
import { 
    created , 
    findUser , 
    getAllUsers , 
    updateUser,
    deleteUser
} from '../services/user';


const createUser = async (req : Request, res : Response) : Promise<void>  => {
    const { name, email, password,DOB } = req.body;
    try{
        const data = { name, email, password, DOB };
        const user = await findUser({email});
        
        if(user && user?.length > 0){
            res.status(400).json({message: 'User already exists'})
            return;
        }
        const newUser = await created(data)
        res.status(201).json({message: 'User created', data : newUser});

    }catch(err){
        console.log("err" , err);
        
        res.status(500).json({message: err});
    }
}

const getUsers = async (req : Request, res : Response) => {
try{
    const users = await getAllUsers()
    res.status(200).json({
        total : users.length,
        data: users,
    });
}
catch(err){
    res.status(500).json({message: 'Users not found'});
}
}

const updatedUser = async (req : Request, res : Response) => {
    const {id} = req.params
    const {name , DOB} = req.body
    try{
      
       let updateUserDetails =  await updateUser(
            {_id :  id}, 
            {$set :{name , DOB}} , 
            {new : true}
        )
        
        
        res.status(200).json({
            data: updateUserDetails,
        });
    }catch(err){
        console.log("eee" , err);
        
        res.status(500).json({message: 'User not updated'});
    }
}

const DeletedUser = async (req : Request, res : Response): Promise<void> => {
    const {id} = req.params
    try{
        const user = await findUser({id});
            
        if(user.length === 0){
            res.status(400).json({message: 'User not found'})
            return;
        }

        let deleteUserS = await deleteUser({_id : id})
        res.status(200).json({
            message : 'User deleted',
            data: deleteUserS,

        });
    }catch(err){
        res.status(500).json({message: 'User not deleted'});
    }
}


export {
    createUser,
    getUsers,
    updatedUser,
    DeletedUser
}
