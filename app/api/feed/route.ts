import { generateFeed } from '@/utils/generateFeed'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const xml = generateFeed()
    return new NextResponse(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Error generating feed:', error)
    return new NextResponse('Error generating feed', { status: 500 })
  }
}

