import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { topic } = await request.json();
  const fallback = `Discover fresh ${topic || 'Kerala meals'} at Kannur Tatt Kada, Jurf 1, Ajman. Visit us near Lucky Center today!`;
  return NextResponse.json({ text: fallback });
}
