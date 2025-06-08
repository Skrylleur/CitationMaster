import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const citations = await prisma.citation.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(citations)
}

export async function POST(request: NextRequest) {
  try {
    const json = await request.json()

    if (!json.citation || !json.author) {
      return NextResponse.json(
        { error: 'Missing citation or author' },
        { status: 400 }
      )
    }

    const newCitation = await prisma.citation.create({
      data: {
        author: json.author,
        text: json.citation,
      },
    })

    return NextResponse.json({ citation: newCitation }, { status: 201 })
  } catch (error) {
    console.error('POST /api/citations error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}