const express = require('express');
const cors = require('cors');
const paymentRoutes = require('./payment');

const app = express();
const PORT = process.env.PORT || 3000; // 🔥 DÙNG process.env.PORT cho Render

app.use(cors());
app.use(express.json());
app.use('/api', paymentRoutes);

// 🔥 route gốc
app.get('/', (req, res) => {
  res.send('✅ BZFight Wallet API đang chạy!');
});

app.listen(PORT, () => {
  console.log('🚀 Server chạy tại http://localhost:' + PORT);
});
