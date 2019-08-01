import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import versionRouter from './routes/versionRouter';

const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/version', versionRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});
