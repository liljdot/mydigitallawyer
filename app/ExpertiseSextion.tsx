import Section from "@/components/layout/Section"
import { AncizarH4, AncizarH5 } from "@/components/Typography";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import lightbulb from "@/public/assets/images/lightbulb-icon.png"
import playIcon from "@/public/assets/images/play-icon.png"
import techIcon from "@/public/assets/images/tech-icon.png"
import buildingIcon from "@/public/assets/images/building-icon.png"
import peopleIcon from "@/public/assets/images/people-icon.png"
import world from "@/public/assets/images/world-icon.png"
import briefcase from "@/public/assets/images/briefcase-icon.png"
import scale from "@/public/assets/images/scale-icon.png"
import speakingIcon from "@/public/assets/images/speaking-icon.png"
import Image, { StaticImageData } from "next/image";
import { BOOKING_LINK } from "./data";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

interface Expertise {
    area: string
    text: string
    icon: StaticImageData
    id: string
}

const ExpertiseSection: React.FC = () => {
    const deepExpertise: Expertise[] = [
        {
            area: "Intellectual Property Law",
            icon: lightbulb,
            text: "We help creatives, businesses, and innovators protect, manage, and commercialise their intellectual assets, including brand identities , creative works, and other valuable IP rights.",
            id: "ip-law"
        },
        {
            area: "Media & Entertainment Law",
            icon: playIcon,
            text: "Strategic legal support for the entertainment industry, covering artists, record labels, producers, filmmakers, and other creative professionals navigating contracts, intellectual property rights, and commercial opportunities.",
            id: "media-law"
        },
        {
            area: "Technology Law",
            icon: techIcon,
            text: "Legal guidance for technology-driven businesses, startups, and innovators navigating digital products, technology transactions, intellectual property, and emerging legal risks.",
            id: "tech-law"
        }
    ]

    const generalExpertise: Expertise[] = [
        {
            area: "Corporate Governance & Compliance",
            icon: buildingIcon,
            text: "Helping businesses establish sound governance structures, meet regulatory obligations, and operate with greater legal clarity and confidence.",
            id: "corporate-law"
        },
        {
            area: "Property & Family Law",
            icon: peopleIcon,
            text: "Practical legal support for property transactions, ownership matters, and family-related legal needs, wills, testamentory needs and grants of probates- all delivered with discretion and a personalised approach",
            id: "family-law"
        },
        {
            area: "Immigration Law",
            icon: world,
            text: "Strategic legal guidance for individuals, professionals, and businesses navigating immigration processes and related legal requirements.",
            id: "immigration-law"
        },
        {
            area: "Employment & Labour Law",
            icon: briefcase,
            text: "Supporting employers and employees with legal guidance on workplace matters, employment relationships, contracts, and labour-related issues.",
            id: "labour-law"
        },
        {
            area: "General Practice & Litigation",
            icon: scale,
            text: "Trusted legal counsel and representation across a broad range of legal matters, including dispute resolution and litigation where necessary.",
            id: "litigation"
        },
        {
            area: "Mentorship & Public Speaking",
            icon: speakingIcon,
            text: "Sharing legal insights, industry knowledge, and practical guidance through mentorship, speaking engagements, and thought leadership.",
            id: "mentorship"
        }
    ]

    return (
        <Section className={`${openSans.className} gap-16`} id="services">
            <div className="card md:card-side gap-6 md:gap-26">
                <div className="card-body gap-6 text-center md:text-left p-0">
                    <AncizarH4 className="text-primary">
                        We Offer Legal Expertise for What Matters Most
                    </AncizarH4>

                    <p className="text-neutral-content opacity-60 text-base/6 font-normal">
                        At MyDigitalLawyer®️, we offer focused legal expertise and strategic counsel across industries, businesses, and individual needs. Our practice is built around a deep understanding of modern legal challenges and a commitment to delivering practical, commercially sound solutions.
                    </p>
                </div>
                <div className="card-actions min-w-fit justify-center md:justify-start md:items-end">
                    <Link href={BOOKING_LINK} className="btn btn-primary font-normal rounded-full">
                        Book a Consultation
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-10">
                <AncizarH5 className="text-center">
                    Our Areas of Deep Expertise
                </AncizarH5>

                <ExpertiseList list={deepExpertise} />
            </div>

            <div className="flex flex-col gap-10">
                <AncizarH5 className="text-center">
                    Other Practice Areas
                </AncizarH5>

                <ExpertiseList list={generalExpertise} />
            </div>
        </Section>
    )
}

interface ExpertiseListProps {
    list: Expertise[]
}

const ExpertiseList: React.FC<ExpertiseListProps> = ({ list }) => {

    return (
        <div className="flex flex-row flex-wrap justify-center md:justify-between gap-y-10">
            {list.map(e => (
                <ExpertiseCard
                    area={e.area}
                    icon={e.icon}
                    text={e.text}
                    key={e.area}
                    id={e.id}
                />
            ))}
        </div>
    )
}

const ExpertiseCard: React.FC<Expertise> = ({
    area,
    icon,
    text,
    id
}) => {

    return (
        <div className="card w-full sm:w-72 md:w-96 gap-10 rounded-none shadow-2xl px-8 py-10" id={id}>
            <figure className="">
                <Image
                    alt="icon"
                    src={icon}
                    className="size-25"
                />
            </figure>

            <div className="card-body justify-center gap-6 text-center p-0">
                <AncizarH5>
                    {area}
                </AncizarH5>

                <p className="text-neutral-content text-base opacity-60">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default ExpertiseSection;