import Section from "@/components/layout/Section";
import { AncizarH5 } from "@/components/Typography";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

const ChooseSection: React.FC = () => {
    const reasons: { title: string, text: string }[] = [
        {
            title: "A Client-First Approach",
            text: "Every client is treated as an individual—not simply another file. We listen first, understand your goals, and develop legal solutions tailored to your unique needs."
        },
        {
            title: "Proactive Legal Solutions",
            text: "We believe prevention is better than cure. Our focus is on helping clients avoid legal problems through sound legal structures, contracts, compliance, governance, and strategic advice."
        },
        {
            title: "Specialist Expertise",
            text: " We bring deep expertise in Intellectual Property, Media & Entertainment, and Technology Law, while providing comprehensive legal support across a broad range of practice areas."
        },
        {
            title: "Experienced Legal Professionals",
            text: "Led by Omotayo Abiode and supported by experienced legal professionals with over 45 years of combined legal experience, we bring the right expertise to every matter."
        },
        {
            title: "Commercially Focused Advice",
            text: "Our legal solutions are practical, business-oriented, and designed to help clients make informed decisions while protecting their interests and supporting their ambitions."
        },
        {
            title: "Cross-Border Capability",
            text: "Through our trusted network of legal partners across Africa, we are well-positioned to assist clients with regional and cross-border legal matters."
        },
        {
            title: "Responsive & Personalised Service",
            text: "We pride ourselves on being approachable, accessible, and responsive. Every client receives dedicated attention and timely communication throughout their legal journey."
        },
        {
            title: "Integrity, Professionalism & Excellence",
            text: "We uphold the highest standards of ethics, professionalism, and service—earning the trust of businesses, entrepreneurs, creatives, and individuals alike."
        }
    ]

    return (
        <Section className={`${openSans.className} bg-base-100 md:bg-neutral`}>
            <div className="flex flex-col bg-base-100 gap-6 md:gap-10">
                <div className="flex flex-col gap-6 text-center md:text-left md:px-14 md:py-10">
                    {reasons.map(r => (<ListItem area={r} key={r.title} />))}
                </div>
            </div>
        </Section>
    )
}

const ListItem: React.FC<{ area: { title: string, text: string } }> = ({ area }) => {

    return (
        <div className="flex flex-col">
            <AncizarH5>
                {area.title}
            </AncizarH5>
            <p className="text-neutral-content opacity-60 text-sm md:text-base/8 font-normal">
                {area.text}
            </p>
        </div>
    )
}

export default ChooseSection