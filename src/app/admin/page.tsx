import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { DeleteCitationButton } from "./delete-citation-button"

export default async function Page() {
  const citations = await prisma.citation.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Les citations</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Link
            className={buttonVariants({ size: "lg", variant: "outline" })}
            href="/admin/citations/new"
            >
            Create citation
        </Link>
        </CardContent>
      <CardContent className="flex flex-col gap-4">
        {citations.map((citation) => (
          <Card key={citation.id} className="flex justify-between items-start gap-4 p-4">
            <div className="flex flex-col gap-2 flex-1">
              <p className="relative pl-8 italic before:content-['“'] before:absolute before:left-0 before:top-0 before:text-3xl before:text-muted-foreground">
                {citation.text}
              </p>
              <p className="text-sm text-muted-foreground text-right">— {citation.author}</p>
            </div>
            <div className="flex justify-center gap-2 mt-2">
            <DeleteCitationButton id={citation.id} />
            <Link
                className={buttonVariants({ size: "sm", variant: "outline" })}
                href={`/admin/citations/${citation.id}`}
            >
                📝
            </Link>
            <Link
                className={buttonVariants({ size: "sm", variant: "outline" })}
                href={`/citations/${citation.id}`}
            >
                🔗
            </Link>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}