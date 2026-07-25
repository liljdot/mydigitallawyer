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
                    "text-lg md:text-2xl",
                    className
                )}
                {...props}
            >
                {children}
            </h6>
        </>
    )
}

const AncizarH5: React.FC<ComponentProps<"h5">> = ({
    className,
    children,
    ...props
}) => {

    return (
        <h5
            className={cn(
                aSerif.className,
                "text-xl md:text-2xl",
                className
            )}
            {...props}
        >
            {children}
        </h5>
    )
}

const AncizarH4: React.FC<ComponentProps<"h4">> = ({
    className,
    children,
    ...props
}) => {

    return (
        <h4
            className={cn(
                aSerif.className,
                "text-2xl md:text-4xl",
                className
            )}
            {...props}
        >
            {children}
        </h4>
    )
}

export { AncizarH6, AncizarH5, AncizarH4 }