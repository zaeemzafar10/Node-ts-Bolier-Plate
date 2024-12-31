import { model , Schema , Document } from 'mongoose';

export interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    DOB : string;
    _id: string;
}

interface Users{
    name: string;
    email: string;
    password: string;
    DOB : string;
    _id: string;
}

const userSchema = new Schema<Users>({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    DOB:{
        type: String,
        required: true 
    }
    },

    { timestamps: true }
)

    const userModel = model<Users>('user', userSchema);
    export default userModel;