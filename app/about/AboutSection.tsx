import Section from "@/components/layout/Section"
import { AncizarH4 } from "@/components/Typography";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

const AboutSection: React.FC = () => {

    return (
        <Section className={`${openSans.className} gap-6 md:gap-10 mt-20 md:mt-50`}>
            <div className="flex flex-col gap-6 text-center md:text-left">
                <AncizarH4 className="text-primary">
                    About MyDigitalLawyer®️ <br /> Modern Legal Solutions. Trusted Legal Partnership.
                </AncizarH4>

                <p className="text-neutral-content opacity-60 text-sm md:text-base/6 font-normal">
                    At MDL®️, we provide strategic, practical, and commercially focused legal solutions for businesses, creatives, individuals, and organisations navigating an increasingly complex world.
                    <br /><br /> Proudly based in Nigeria and serving clients locally and internationally, we are a modern, client-focused law practice built around a simple belief: the best legal advice begins with a genuine understanding of the people and ambitions behind every legal matter.
                    <br /><br /> Led by Omotayo Abiode, an experienced lawyer with over 12 years of legal practice, MyDigitalLawyer®️ combines specialist legal expertise, commercial insight, and a deeply personal approach to client service. Through a carefully selected network of experienced legal professionals, our wider team brings over 45 years of combined legal experience across a broad range of legal disciplines.
                    <br /><br /> We do not believe in one-size-fits-all legal advice. Every client, business, and legal challenge is different. Our role is to understand your circumstances, identify what truly matters, and provide the clarity, protection, and strategic guidance required to help you move forward with confidence.
                </p>
            </div>
        </Section>
    )
}

export default AboutSection;