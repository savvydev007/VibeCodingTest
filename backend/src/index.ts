import express from 'express';
import cors from 'cors';
import pool from './db';
import { ideasRouter } from './routes/ideas';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Routes
app.use('/ideas', ideasRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

