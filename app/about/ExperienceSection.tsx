import Section from "@/components/layout/Section";
import { AncizarH4 } from "@/components/Typography";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

const ExperienceSection: React.FC = () => {

    return (
        <Section className={`${openSans.className} bg-base-100 md:bg-neutral`}>
            <div className="flex flex-col bg-base-100 gap-6 md:gap-10">
                <div className="flex flex-col gap-6 text-center md:text-left md:px-14 md:py-10">
                    <AncizarH4 className="text-primary md:text-neutral-content">
                        Experience You Can Trust
                        <br />
                        Expertise That Works for You.
                    </AncizarH4>

                    <p className="text-neutral-content opacity-60 text-sm md:text-base/8 font-normal">
                        MDL®️ is led by Omotayo Abiode, a lawyer with over 12 years of legal practice and a wealth of experience across modern and commercially relevant areas of law.
                        <br /> We also collaborate with a carefully selected network of experienced legal professionals whose combined legal experience spans over 45 years.
                        <br /> Together, our collective expertise extends across Intellectual Property, Media & Entertainment, Technology, Corporate Governance, Employment, Property, Immigration, Litigation, and Commercial Law.
                        <br /> This collaborative approach allows us to bring the right expertise to each matter while maintaining the personalised attention, responsiveness, and quality of service that define our practice.
                        <br /> Whether your legal needs are straightforward or complex, you can be confident that your matter is handled by experienced legal professionals committed to delivering practical, commercially focused, and results-driven solutions..
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default ExperienceSection;