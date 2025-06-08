import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Page({ params }: {
  params: { citationId: string }
}) {
  const citationId = Number(params.citationId);

  const citation = await prisma.citation.findUnique({
    where: { id: citationId },
  });

  if (!citation) {
    return (
      <Card className="max-w-md mx-auto mt-10">
        <CardHeader>
          <CardTitle>La citation {citationId} n&apos;existe pas.</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="min-h-full flex flex-col items-center justify-center">
    <Link href="/admin" className={buttonVariants({size: "lg", variant: "outline"})}>
        Retour à la liste des citations
    </Link>
    <Card className="max-w-md mx-auto mt-10 p-4">
      <CardHeader>
        <CardTitle>Détail de la citation</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="relative pl-8 italic before:content-['“'] before:absolute before:left-0 before:top-0 before:text-3xl before:text-muted-foreground">
          {citation.text}
        </p>
        <p className="text-sm text-muted-foreground text-right">— {citation.author}</p>
      </CardContent>
    </Card>
    </div>
  );
}