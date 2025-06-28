const express = require('express');
const axios = require('axios');
const router = express.Router();

// 🔐 Khóa API từ Pi Developer Portal (chỉ testnet hoặc mainnet thật)
const PI_API_KEY = 'nwhw1cakiuvel50l32vwog3oyy6x8rrywudku3prqpt2m1q3zalvxgn9ao9ua5av';

const headers = {
  Authorization: `Key ${PI_API_KEY}`,
  'Content-Type': 'application/json',
};

// ✅ /api/approve-payment
router.post('/approve-payment', async (req, res) => {
  const { paymentId } = req.body;
  try {
    const result = await axios.post(
      `https://api.minepi.com/v2/payments/${paymentId}/approve`,
      {},
      { headers }
    );
    console.log("🟢 Approve Success:", result.data);
    res.json({ success: true, data: result.data });
  } catch (err) {
    console.error('❌ Approve failed:', err.message);
    res.status(500).json({ error: 'approve-payment failed' });
  }
});

// ✅ /api/complete-payment
router.post('/complete-payment', async (req, res) => {
  const { paymentId } = req.body;
  try {
    const result = await axios.post(
      `https://api.minepi.com/v2/payments/${paymentId}/complete`,
      {},
      { headers }
    );
    console.log("✅ Complete Success:", result.data);
    res.json({ success: true, data: result.data });
  } catch (err) {
    console.error('❌ Complete failed:', err.message);
    res.status(500).json({ error: 'complete-payment failed' });
  }
});

module.exports = router;

