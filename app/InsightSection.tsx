import Section from "@/components/layout/Section"
import Image from "next/image";
import insightImage from "@/public/assets/images/insight-image.png"
import insightImageMobile from "@/public/assets/images/insight-image-mobile.png"
import { AncizarH4 } from "@/components/Typography";
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
                        Led by Omotayo Alemeru Abiode, an award-winning International Entertainment and Intellectual Property Lawyer with over 12 years of experience, our practice combines deep legal expertise with a commercially minded approach — helping clients protect what matters, navigate complexity, and move forward with confidence.
                        <br />
                        <br />
                        Backed by international certifications from World Intellectual Property Organization (WIPO) and Harvard Law, MDL®️ is trusted by record labels, Nollywood producers, tech startups, and creative and business executives across Africa and beyond.
                        <br />
                        <br />
                        Founded to bridge the gap between legal expertise and real-world business needs, we take a highly personalised approach to every matter. Our advice is tailored to each client’s unique goals, challenges, and aspirations — delivering legal support that is practical, strategic, and results-driven.
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