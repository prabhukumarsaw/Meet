import express from 'express';
import { PORT, MongoDBURL } from './config.js';
import mongoose from 'mongoose';
import HackerRouter from './router/hacker-router.js';
import UserRouter from './router/user-router.js';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import 'dotenv/config'


const app = express();
app.use(express.json());
app.use(cors());

//JWT Authentication

app.post('/jwt', async(request, response) => {
    const user = request.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1hr'
    })
    response.send({token});
});




//create route
app.get('/', ((request, response) => {
    return response.status(200).send('Welcome to codeHacker')
}));

app.use('/', HackerRouter);
app.use('/', UserRouter);

mongoose.connect(MongoDBURL).then(() => {
    app.listen(PORT, (() => {
        console.log('====================================');
        console.log('App Connected to Database');
        console.log('====================================');
        console.log(`Server Started Port ${PORT}`)
    }));
    
}).catch((error) => {
    console.log(error);
});

