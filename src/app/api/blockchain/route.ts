import { NextResponse } from 'next/server';
import { Drizzle } from '@drizzle/store';

// Initialize Drizzle with blockchain connection
const options = {
  web3: {
    customProvider: {
      url: process.env.BLOCKCHAIN_PROVIDER || 'http://localhost:8545'
    }
  }
};

const DrizzleInstance = new Drizzle(options);

import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    // Example blockchain query
    const result = await DrizzleInstance.query('yourContractMethod');
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Blockchain request failed' }, { status: 500 });
  }
}