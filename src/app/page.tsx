import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Bienvenue sur &quot;Citation Master&quot;
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Link href="/admin" className={buttonVariants({size: "lg", variant: "outline"})}>
          Voir les citations
        </Link>
      </CardContent>
    </Card>
  )
}