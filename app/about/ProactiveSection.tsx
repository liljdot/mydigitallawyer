import Section from "@/components/layout/Section"
import { AncizarH4 } from "@/components/Typography"
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

const ProactiveSection: React.FC = () => {

    return (
        <Section className={`${openSans.className} bg-base-100 md:bg-neutral`}>
            <div className="flex flex-col bg-base-100 gap-6 md:gap-10">
                <div className="flex flex-col gap-6 text-center md:text-left md:px-14 md:py-10">
                    <AncizarH4 className="text-primary md:text-neutral-content">
                        A Proactive, Transaction-Focused Practice
                        <br />
                        Prevention Before Dispute.
                    </AncizarH4>

                    <p className="text-neutral-content opacity-60 text-sm md:text-base/8 font-normal">
                        At MDL®️, we believe the best legal dispute is the one that never happens.
                        <br /><br /> Our practice is built on a proactive and transaction-focused approach to law. We work with clients to identify, manage, and reduce legal risks before they develop into costly or disruptive disputes. From business formation and regulatory compliance to contract drafting, intellectual property protection, employment documentation, commercial transactions, and corporate advisory, we work alongside our clients to put the right legal structures in place from the beginning.
                        <br /><br /> We believe strong legal foundations give businesses and individuals the freedom to operate, grow, and innovate with greater confidence.
                        <br /><br />While we are fully equipped to represent clients in litigation and dispute resolution where necessary, our focus is always on prevention where possible. We believe prevention is better than cure—and that proactive legal advice can save clients significant time, cost, and uncertainty.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default ProactiveSection