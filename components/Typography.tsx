import { cn } from "@/lib/utils"
import { Ancizar_Serif } from "next/font/google"
import { ComponentProps } from "react"

const aSerif = Ancizar_Serif({
    variable: "--font-ancizar-serif",
    subsets: ["latin"],
    display: "swap"
})

const AncizarH6: React.FC<ComponentProps<"h6">> = ({
    className,
    children,
    ...props
}) => {

    return (
        <>
            <h6
                className={cn(
                    aSerif.className,
                    "text-2xl",
                    className
                )}
                {...props}
            >
                {children}
            </h6>
        </>
    )
}

export { AncizarH6 }