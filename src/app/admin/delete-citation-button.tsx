"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import { deleteCitationAction } from "./citations/new/citations.action"

export function DeleteCitationButton({ id }: { id: number }) {
  const [isConfirm, setIsConfirm] = useState(false)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const onDelete = () => {
    startTransition(async () => {
      const result = await deleteCitationAction(id)
      if (result.message) {
        router.refresh()
      }
    })
  }

  return (
    <Button
        size="sm"
      onClick={() => {
        if (isConfirm) {
          onDelete()
        } else {
          setIsConfirm(true)
        }
      }}
      variant={isConfirm ? "destructive" : "outline"}
      disabled={isPending}
    >
      {isConfirm ? "Confirmer" : "🗑️"}
    </Button>
  )
}