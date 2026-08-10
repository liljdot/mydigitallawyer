import Section from "@/components/layout/Section"
import { AncizarH4, AncizarH5, AncizarH6 } from "@/components/Typography";
import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";
import { StaticImageData } from "next/image";
import { ComponentProps } from "react";
import omotayoImage from "@/public/assets/images/omotayo-image.png"
import harrisonImage from "@/public/assets/images/harrison-Image.png"
import mosesImage from "@/public/assets/images/moses-image.png"
import jesutImage from "@/public/assets/images/jesut-image.png"
import bolajiImage from "@/public/assets/images/bolaji-image.png"
import nkemImage from "@/public/assets/images/nkem-image.png"
import bolaImage from "@/public/assets/images/bola-image.png"
import stephenImage from "@/public/assets/images/stephen-image.png"
import davidImage from "@/public/assets/images/david-image.png"
import ukwaImage from "@/public/assets/images/ukwa-image.png"

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

interface Attorney {
    image: StaticImageData
    name: string
    title: string
}

const PeopleSection: React.FC = () => {
    const leadership: Attorney[] = [
        {
            image: omotayoImage,
            name: "Omotayo Abiode",
            title: "Founder & Lead Consultant"
        },
        {
            image: harrisonImage,
            name: "Harrison Abiode",
            title: "Business Director"
        }
    ]

    const legalTeam: Attorney[] = [
        {
            image: mosesImage,
            name: "Moses Malan",
            title: "Technology Law Lead"
        },
        {
            image: jesutImage,
            name: "Jesutimileyin Adesanya",
            title: "Litigation Lead"
        },
        {
            image: bolajiImage,
            name: "Bolaji Otitoju",
            title: "Fashion Law Specialist"
        },
        {
            image: nkemImage,
            name: "Nkemjika Okoye",
            title: "Business Law and Strategy"
        }
    ]

    const bizOp: Attorney[] = [
        {
            image: bolaImage,
            name: "Bola Okwu",
            title: "Practice Manager"
        },
        {
            image: stephenImage,
            name: "Stephen Odutola",
            title: "Property & Real Estate Consultant"
        },
        {
            image: davidImage,
            name: "⁠David Agida",
            title: "Paralegal"
        },
        {
            image: ukwaImage,
            name: "Ukwa Ukwa",
            title: "Accountant"
        }
    ]

    return (
        <Section className={`${openSans.className} gap-6 md:gap-10`} id="team">
            <div className="flex flex-col gap-6 text-center md:text-left">
                <AncizarH4 className="text-primary">
                    The People Behind the Practice
                </AncizarH4>

                <p className="text-neutral-content opacity-60 text-sm md:text-base/6 font-normal">
                    Our team brings together legal expertise, industry insight, and a commitment to delivering exceptional client service.
                </p>
            </div>

            <div className="flex flex-col items-center gap-4 md:gap-6">
                <AncizarH5>
                    Leadership
                </AncizarH5>
                <AttorneyList list={leadership} />
            </div>

            <div className="flex flex-col items-center gap-4 md:gap-6">
                <AncizarH5>
                    Legal Team
                </AncizarH5>
                <AttorneyList cardClassName="md:w-72 md:h-79" list={legalTeam} />
            </div>

            <div className="flex flex-col items-center gap-4 md:gap-6">
                <AncizarH5>
                    Business and Operations
                </AncizarH5>
                <AttorneyList cardClassName="md:w-72 md:h-79" list={bizOp} />
            </div>
        </Section>
    )
}

interface AttorneyListProps extends ComponentProps<"div"> {
    list: Attorney[]
    cardClassName?: string
}

const AttorneyList: React.FC<AttorneyListProps> = ({
    list,
    className,
    cardClassName,
    ...props
}) => {

    return (
        <div className={cn(
            "flex flex-row flex-wrap justify-center gap-6",
            className
        )}
            {...props}
        >
            {list.map(a => (<AttorneyCard className={cardClassName} attorney={a} key={a.name} />))}
        </div>
    )
}

interface AttorneyCardProps {
    attorney: Attorney
    className?: string
}

const AttorneyCard: React.FC<AttorneyCardProps> = ({ attorney, className }) => {

    return (
        <div className={cn(" relative flex flex-col w-41 md:w-96 h-44 md:h-105 justify-end rounded-4xl overflow-clip", className)} style={{ backgroundImage: `url(${attorney.image.src})`, backgroundSize: "100%", }}>
            <div className="flex flex-col md:h-21 gap-2 md:mx-6 my-3 md:my-7 py-2 md:py-0 justify-center items-center bg-black/30 backdrop-blur-sm md:rounded-full z-3">
                <AncizarH6 className="text-sm text-neutral">{attorney.name}</AncizarH6>
                <p className="text-[10px] md:text-base text-neutral text-center opacity-60">{attorney.title}</p>
            </div>
            <div className="w-full h-full absolute bg-linear-to-t from-black via-40% md:via-40% via-transparent to-transparent z-2" />
        </div>
    )
}

export default PeopleSection;