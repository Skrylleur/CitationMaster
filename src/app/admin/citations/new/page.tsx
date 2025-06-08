'use client'

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createCitationAction } from './citations.action'

export default function Page() {
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)

    try {
      const citation = String(formData.get('citation'))
      const author = String(formData.get('author'))

      const newCitation = await createCitationAction({
        text: citation,
        author,
      })

      console.log('Création réussie :', newCitation)
      setSuccessMessage('Citation enregistrée avec succès.')
      formRef.current?.reset()
    } catch (err) {
      console.error('Erreur de création :', err)
      setSuccessMessage('Une erreur est survenue.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Create citation</CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Label>
            Citation
            <Input name="citation" required />
          </Label>
          <Label>
            Author
            <Input name="author" required />
          </Label>
          <Button disabled={isLoading} type="submit">
            {isLoading ? 'Loading...' : 'Submit'}
          </Button>
          {successMessage && (
            <p className="text-sm text-center text-muted-foreground">
              {successMessage}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}