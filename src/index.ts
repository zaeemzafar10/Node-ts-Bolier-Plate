import express,{Request , Response} from 'express';
import cors from 'cors';
import mongoose,{connect} from 'mongoose';
import { createServer } from 'http';
import {router} from './routes'
import dotenv from 'dotenv';
const app = express();

dotenv.config();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/api', router);
const server = createServer(app);

connect('mongodb+srv://customdev:L3UBmcem2pEcLBe4@customdev.lvhcg6q.mongodb.net/gamez')
.then((res) => console.log('Connected to DB'))
.catch((err) => console.log("DB not connected"));

app.get('/', (req : Request, res : Response) : void => {
    let line : string = 'Working on Typescript Node Server @@'
     res.status(200).json({message: line});
});


const PORT = 3004

server.listen(PORT, () : void => {
  console.log( `Server is running on port ${PORT}`);
});

