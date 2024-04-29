import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/index';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router)


app.listen(
    process.env.PORT,
    ()=>console.log(`http://localhost:${process.env.PORT}/api`)
)