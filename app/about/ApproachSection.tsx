import Section from "@/components/layout/Section";
import { AncizarH4 } from "@/components/Typography";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

const ApproachSection: React.FC = () => {

    return (
        <Section className={`${openSans.className} bg-base-100 md:bg-neutral`}>
            <div className="flex flex-col md:bg-base-100 gap-6 md:gap-10">
                <div className="flex flex-col gap-6 text-center md:text-left md:px-14 md:py-10">
                    <AncizarH4 className="text-primary md:text-neutral-content">
                        Our Approach
                        <br />
                        People First. Always.
                    </AncizarH4>

                    <p className="text-neutral-content opacity-60 text-sm md:text-base/8 font-normal">
                        At MyDigitalLawyer®️, people come first.
                        <br /><br />
                        We believe the best legal solutions begin with listening. Before offering legal advice, we take the time to understand your story, your objectives, your business, and the challenges you face. Every client deserves to be heard, understood, and treated with respect.
                        Whether you work directly with our Lead Consultant or another lawyer within our professional network, you can expect a personalised service built on empathy, professionalism, and trust.
                        <br /><br />
                        We combine technical legal expertise with genuine human understanding. This allows us to provide thoughtful advice and practical solutions that are tailored to each client&apos;s unique circumstances, not simply legal answers that exist in theory.
                        Our goal is not merely to solve legal problems. We aim to build lasting relationships with our clients as trusted legal partners throughout their personal, professional, and business journeys.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default ApproachSection;