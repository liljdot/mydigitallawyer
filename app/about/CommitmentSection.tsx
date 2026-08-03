import Section from "@/components/layout/Section";
import { AncizarH4 } from "@/components/Typography";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

const CommitmentSection: React.FC = () => {

    return (
        <Section className={`${openSans.className} bg-base-100 md:bg-neutral`}>
            <div className="flex flex-col bg-base-100 gap-6 md:gap-10">
                <div className="flex flex-col gap-6 text-center md:text-left md:px-14 md:py-10">
                    <AncizarH4 className="text-primary md:text-neutral-content">
                        Our Commitment
                        <br />
                        Protecting What Matters. Supporting What Comes Next.
                    </AncizarH4>

                    <p className="text-neutral-content opacity-60 text-sm md:text-base/8 font-normal">
                        At MDL®️, we are committed to helping our clients build confidently, create boldly, and grow securely. Whether you need to protect your intellectual property, structure your business, negotiate a commercial agreement, maintain regulatory compliance, resolve a dispute, or simply obtain trusted legal advice, we are here to provide practical legal solutions tailored to your needs.
                        <br />
                        <br />
                        We are more than legal advisers.
                        <br /><br />
                        We are trusted legal partners committed to protecting your interests, supporting your ambitions, and helping you succeed. Your goals become our priority, and your success is the measure of ours.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default CommitmentSection;