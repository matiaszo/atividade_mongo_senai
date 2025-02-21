import express from 'express';
import initRoutes from "./routes/routes.ts"
import connectDB from "./database/mongo.ts"
import cors from 'cors';

const app = express();
const port = 8080;

app.use(cors({
    origin: '*'
}))

connectDB();
initRoutes(app);

app.listen(port, () => console.log(`Acesse: http://localhost:${port}`));
