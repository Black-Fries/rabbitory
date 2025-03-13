import { NextResponse } from 'next/server';

// Mock data - in a real app, this would come from a database
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com' },
];

export async function GET() {
  // Simulate a delay to show loading state
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json(users);
}