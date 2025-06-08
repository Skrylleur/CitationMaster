import { Header } from "@/components/header";
import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
    return <div>
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl flex flex-col gap-4">
            <Header />    
            {props.children}
          </div>
        </div>

    </div>
}