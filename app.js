import express from 'express';
import dotenv from 'dotenv';
import initDB from './src/config/db.js';
import productRoutes from './src/routes/product.route.js';
import userRouter from './src/routes/user.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/products',productRoutes);
app.use('/user',userRouter);


initDB().then(() =>  {
    app.listen(PORT, () =>{
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    })
    
})
