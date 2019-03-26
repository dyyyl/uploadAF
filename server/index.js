import cors from 'cors';
import express from 'express';

import upload from './src/lib/upload.js';

const server = express();
const port = 8000;

// allow all origin requests 🚀
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

server.use(cors(corsOptions));

server.post('/upload', upload);

server.listen(port, () => {
  console.log(`Server started on port: ${port}! 🚀`);
});
