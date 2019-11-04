import express from 'express';
import cors from 'cors';
import path from 'path';

import { paymentController } from './paymentController';

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 2019;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.post('/api/v1/payment', paymentController);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/', 'index.html'));
  });
}

app.listen(port);
