import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends React.ComponentProps<"section"> {

}

const Section: React.FC<Props> = ({
    className,
    children,
    ...props
}) => {


    return (
        <section
            className={cn("md:px-30",
                className
            )}
            {...props}
        >
            {children}
        </section>
    )
}

export default Section;