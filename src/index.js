'use strict';

const express = require('express');
const { ContinentalClient } = require('@continental/concierge-sdk');

const app  = express();
const PORT = process.env.PORT || 3000;
const sdk  = new ContinentalClient({ baseUrl: process.env.CONCIERGE_HOST || 'http://localhost' });

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'continental-api', version: '1.0.0' });
});

app.get('/reservations', async (_req, res) => {
  try {
    const data = await sdk.getReservations();
    res.json(data);
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
});

app.get('/services', async (_req, res) => {
  try {
    const data = await sdk.getServices();
    res.json(data);
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Continental API listening on port ${PORT}`));
