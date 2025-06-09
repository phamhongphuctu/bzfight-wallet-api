const express = require('express');
const axios = require('axios');
const router = express.Router();

const PI_API_KEY = 'DÁN_API_KEY_CỦA_ANH_VÀO_ĐÂY'; // 🟡 Thay bằng Pi API Key thật
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
    res.json({ success: true, data: result.data });
  } catch (err) {
    console.error('❌ Complete failed:', err.message);
    res.status(500).json({ error: 'complete-payment failed' });
  }
});

module.exports = router;
