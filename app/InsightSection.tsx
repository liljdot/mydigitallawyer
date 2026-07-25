import Section from "@/components/layout/Section"
import Image from "next/image";
import insightImage from "@/public/assets/images/insight-image.png"
import insightImageMobile from "@/public/assets/images/insight-image-mobile.png"
import { AncizarH4, AncizarH6 } from "@/components/Typography";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

const InsightSection: React.FC = () => {

    return (
        <Section className={`${openSans.className}`}>
            <div className="card md:card-side gap-6 md:gap-10">
                <figure className="justify-start grow-0 w-full">
                    <Image
                        alt="impartial lady"
                        src={insightImage}
                        className="hidden md:block h-full w-full"
                    />
                    <Image
                        alt="impartial lady"
                        src={insightImageMobile}
                        className="md:hidden h-full w-full"
                    />
                </figure>
                <div className="card-body w-full text-center md:text-left gap-10 grow-0 py-0 px-0">
                    <AncizarH4 className="text-primary">
                        Legal Insight. Strategic Protection. Global Ambition.
                    </AncizarH4>
                    <p className="text-neutral-content opacity-60 text-base/6 font-normal">
                        MyDigitalLawyer®️ is a modern, client-focused law practice providing sophisticated legal solutions for businesses, creatives, individuals, and brands worldwide.
                        <br />
                        <br />
                        Led by Omotayo Alemeru Abiode, International Entertainment Lawyer, our practice combines deep legal expertise with a commercially minded approach to help clients protect what matters, navigate complexity, and move forward with confidence.
                        <br />
                        <br />
                        With WIPO and Harvard Law-certified Intellectual Property expertise, MyDigitalLawyer®️ is trusted by record labels, Nollywood producers, tech startups, and DGN executives.
                        <br />
                        <br />
                        Founded to bridge the gap between legal expertise and real-world ambition, we take a highly personalised approach to every matter. Our advice is tailored to each client&apos;s unique goals, challenges, and aspirations—delivering legal support that is practical, strategic, and results-driven.
                        <br />
                        <br />
                        From entrepreneurs and startups to creatives, corporate organisations, and individuals, we provide the clarity, protection, and confidence needed to grow, innovate, and succeed.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default InsightSection;