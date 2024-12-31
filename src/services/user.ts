import { FilterQuery , UpdateQuery , QueryOptions , InferSchemaType } from 'mongoose'
import userModel , {UserDocument } from '../models/user'

export function created (data : InferSchemaType<UserDocument>){
    return  userModel.create(data);
}

export function findUser (query: FilterQuery<UserDocument>){
    const { email , id } = query; 
    if(email){
        return userModel.find({email : email});
    }  else{
        return userModel.find({_id : id});
    }
    
}

export function getAllUsers (){
    return userModel.find().sort({createdAt : -1});
}

export function updateUser (
    query : FilterQuery<UserDocument>, 
    update : UpdateQuery<UserDocument>, 
    options : QueryOptions
){
    const { _id } = query;
   return userModel.findByIdAndUpdate({_id : _id } , update, options);  
}

export function deleteUser (
    query : FilterQuery<UserDocument>
){
    const { _id } = query;
    return userModel.findByIdAndDelete({_id : _id});
}