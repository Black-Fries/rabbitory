import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  
  // Process the count (multiply by 2 as a simple operation)
  const result = {
    count: data.count * 2,
    timestamp: new Date().toISOString()
  };
  
  // Simulate a delay to show loading state
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return NextResponse.json(result);
}