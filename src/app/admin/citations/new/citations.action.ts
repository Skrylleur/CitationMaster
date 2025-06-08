'use server'

import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

/**
 * Crée une citation et redirige vers /admin
 */
export async function createCitationAction(citation: {
  text: string
  author: string
}) {
  try {
    await prisma.citation.create({
      data: {
        author: citation.author,
        text: citation.text,
      },
    })

    redirect("/admin") // ← stoppe l’exécution ici
  } catch (error) {
    console.error("Erreur lors de la création :", error)
    return { error: "Erreur lors de la création de la citation." }
  }
}


/**
 * Met à jour une citation existante et redirige vers /admin
 */
// server action (PAS de redirect ici)
export async function updateCitationAction(id: number, citation: {
  text: string;
  author: string;
}) {
  try {
    await prisma.citation.update({
      where: { id },
      data: citation,
    })
    return { success: true }
  } catch (error) {
    console.error("Erreur modification :", error)
    return { error: "Erreur lors de la mise à jour de la citation." }
  }
}

/**
 * Supprime une citation
 */
export async function deleteCitationAction(id: number) {
  try {
    await prisma.citation.delete({
      where: { id },
    })

    return { message: "Deleted!" }
  } catch (error) {
    console.error("Erreur lors de la suppression :", error)
    return { error: "Suppression impossible." }
  }
}