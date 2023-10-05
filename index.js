import express from 'express';
import dotenv from 'dotenv';
import swaggerDocs from './src/utils/swagger.js';
import router from './src/routes/index.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.redirect('/docs');
})

app.use('/api', router);

swaggerDocs(app);


app.listen(PORT,()=>{
    console.log('Server is Running on PORT', PORT);
})