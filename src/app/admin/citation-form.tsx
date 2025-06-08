'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Citation } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { updateCitationAction } from './citations/new/citations.action'

export default function EditCitationForm({ citation }: { citation: Citation }) {
  const [author, setAuthor] = useState(citation.author)
  const [text, setText] = useState(citation.text)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      const result = await updateCitationAction(citation.id, { author, text })
      if (result?.error) {
        setMessage(result.error)
      } else {
        router.push('/admin')
      }
    } catch (error) {
      console.error('Erreur lors de la modification :', error)
      setMessage("Erreur lors de la modification.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Modifier la citation</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="text">Citation</Label>
            <Input
              id="text"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="author">Auteur</Label>
            <Input
              id="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Enregistrement...' : 'Enregistrer'}
          </Button>
          {message && (
            <p className="text-sm text-center text-red-500">{message}</p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}