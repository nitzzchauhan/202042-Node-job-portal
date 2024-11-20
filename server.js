import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import dbConnect from './db/db.js';
import userRoutes from './userRoutes/userRoutes.js';
import jobRoutes from './userRoutes/jobRoutes.js'
import companyRoutes from './userRoutes/companyRoutes.js';





const app = express();
dbConnect();
dotenv.config();

app.use(morgan('dev'));
app.use(express.json())



app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);  
app.use('/api/company', companyRoutes);  















const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});