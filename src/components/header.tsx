import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { buttonVariants } from "./ui/button";

export function Header() {
    return(
        <Card className="p-4 ">
            <p>Citation Master</p>
            <CardContent>
                <Link href="/" className={buttonVariants({size: "lg", variant: "outline"})}>
                Menu
                </Link>
            </CardContent>
        </Card>
    )
}