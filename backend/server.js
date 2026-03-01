import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));

app.get('/', (req, res) => res.send('Poster Maker API is running...'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server listening on port ${port}`));
