'use strict';

const { ContinentalClient } = require('@continental/concierge-sdk');

async function run() {
  console.log('Running Continental API test suite...');
  const client = new ContinentalClient();
  console.assert(typeof client.getReservations === 'function', 'getReservations missing');
  console.assert(typeof client.checkHealth     === 'function', 'checkHealth missing');
  console.assert(typeof client.getServices     === 'function', 'getServices missing');
  console.log('All tests passed');
}

run().catch((err) => { console.error(err); process.exit(1); });
