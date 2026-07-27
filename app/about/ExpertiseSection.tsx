import Section from "@/components/layout/Section";
import { AncizarH4, AncizarH5, AncizarH6 } from "@/components/Typography";
import { Separator } from "@/components/ui";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

const ExpertiseSection: React.FC = () => {

    return (
        <Section className={`${openSans.className} bg-base-100 md:bg-neutral`}>
            <div className="flex flex-col bg-base-100 gap-6 md:gap-10">
                <div className="flex flex-col gap-6 text-center md:text-left md:px-14 md:py-10">
                    <AncizarH4 className="text-primary md:text-neutral-content">
                        Our Areas of Deep Expertise
                        <br />
                        Specialist Knowledge. Modern Legal Insight.
                    </AncizarH4>

                    <AncizarH6 className="md:text-lg">
                        Our practice has developed deep specialist expertise in three key areas:
                    </AncizarH6>

                    <div className="flex flex-col">
                        <AncizarH5>
                            Intellectual Property Law
                        </AncizarH5>
                        <p className="text-neutral-content opacity-60 text-sm md:text-base/8 font-normal">
                            We help creatives, entrepreneurs, businesses, and innovators protect, manage, and maximise the value of their intellectual assets. Our work covers the legal protection and strategic management of valuable intellectual property in an increasingly creative and innovation-driven economy.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <AncizarH5>
                            Media & Entertainment Law
                        </AncizarH5>
                        <p className="text-neutral-content opacity-60 text-sm md:text-base/8 font-normal">
                            We provide strategic legal support to the entertainment and creative industries, including artists, record labels, producers, filmmakers, and other creative professionals. We help clients navigate rights, contracts, commercial opportunities, and the legal complexities of the media and entertainment landscape.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <AncizarH5>
                            Technology Law
                        </AncizarH5>
                        <p className="text-neutral-content opacity-60 text-sm md:text-base/8 font-normal">
                            We advise technology-driven businesses, startups, and innovators navigating the legal challenges of digital products, technology transactions, intellectual property, and emerging legal risks.
                            <br />
                            These three areas form the foundation of our practice and reflect our commitment to supporting innovation, creativity, and digital transformation.
                        </p>
                    </div>

                    <Separator  className={"border-3 border-accent rounded-full"}/>
                </div>
            </div>
        </Section>
    )
}

export default ExpertiseSection