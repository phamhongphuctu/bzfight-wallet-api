const express = require('express');
const cors = require('cors');
const paymentRoutes = require('./payment');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api', paymentRoutes);

// ✅ Chỉ để MỘT cái app.get('/') ở đây
app.get('/', (req, res) => {
  res.send('✅ BZFight Wallet API đang chạy!');
});

app.listen(PORT, () => {
  console.log('🚀 Server chạy tại http://localhost:' + PORT);
});
