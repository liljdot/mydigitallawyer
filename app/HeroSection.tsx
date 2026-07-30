import Image from "next/image";
import heroImage from "@/public/assets/images/hero-image.png"
import heroImageMobile from "@/public/assets/images/hero-image-mobile.png"
import heroDeco from "@/public/assets/images/hero-section-deco.png"
import floatie1 from "@/public/assets/images/hero-floatie-1.png"
import floatie2 from "@/public/assets/images/hero-floatie-2.png"
import floatie3 from "@/public/assets/images/hero-floatie-3.png"
import Section from "@/components/layout/Section";
import { AncizarH1, AncizarH6 } from "@/components/Typography";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import { BOOKING_LINK, CHAT_LINK } from "./data";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

const HeroSection: React.FC = () => {
    const achievements: AchievementCardProps[] = [
        {
            stat: "12+",
            achievement: "Years of Leadership"
        },
        {
            stat: "7+",
            achievement: "Areas of Expertise"
        },
        {
            stat: "45+",
            achievement: "Years of Combined Legal Experience"
        }
    ]

    return (
        <section className={`relative flex md:min-h-screen w-full #hero ${openSans.className}`}>
            <HeroSectionImage />
            <HeroDeco />
            <Section className="flex flex-col gap-10 mt-20 md:mt-50">
                <div className="card w-full md:w-137 p-0">
                    <div className="hidden md:block">
                        <figure className="absolute w-fit h-fit -left-15 -top-20">
                            <Image
                                alt="floatie"
                                src={floatie1}
                                className="w-11 h-auto"
                            />
                        </figure>
                        <figure className="absolute w-fit h-fit right-20 -top-20">
                            <Image
                                alt="floatie"
                                src={floatie2}
                                className="w-12 h-auto"
                            />
                        </figure>
                        <figure className="absolute w-fit h-fit right-0 bottom-0">
                            <Image
                                alt="floatie"
                                src={floatie3}
                                className="size-19"
                            />
                        </figure>
                    </div>

                    <div className="card-body gap-6 md:gap-12 p-0">
                        <AncizarH1 className="text-neutral-content text-center md:text-left font-semibold">
                            <span className="text-primary">Legal Solutions</span> for Modern Businesses, Creatives & Innovators
                        </AncizarH1>

                        <figure className="md:hidden">
                            <Image
                                src={heroImageMobile}
                                alt="Shoes"
                                className="w-full h-auto"
                            />
                        </figure>

                        <p className="text-sm md:text-base text-center md:text-justify opacity-60 px-6 md:px-0">
                            Expert legal support for businesses, creatives, and innovators across Intellectual Property, Entertainment, technology, corporate, and more.
                        </p>
                        <div className="items-center md:justify-start card-actions flex-col md:flex-row">
                            <Link href={BOOKING_LINK} className="btn btn-primary text-sm md:text-base font-normal rounded-full">Book a Consultation</Link>
                            <Link href={CHAT_LINK} className="btn btn-neutral text-sm md:text-base font-normal border border-primary rounded-full">Chat With Us</Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:w-103.5">
                    {achievements.map(a => (<AchievementCard achievement={a.achievement} stat={a.stat} key={a.achievement} />))}
                </div>
            </Section>
        </section>
    )
}

const HeroSectionImage: React.FC = () => {

    return (
        <figure className="absolute hidden md:block h-full right-0">
            <Image
                alt="female legal counsel"
                src={heroImage}
                className="h-full w-auto"
            />
        </figure>
    )
}


const HeroDeco: React.FC = () => {
    return (
        <figure className="absolute hidden md:block h-fit left-0 top-1/2 -translate-y-1/2">
            <Image alt="female legal counsel" src={heroDeco} className="w-30 h-auto" />
        </figure>
    );
}

interface AchievementCardProps {
    stat: string
    achievement: string
}

const AchievementCard: React.FC<AchievementCardProps> = ({ stat, achievement }) => {
    return (
        <div className="card w-fit items-center justify-center">
            <div className="card-body md:gap-2 text-center p-0">
                <h1 className="text-sm md:text-2xl text-primary font-semibold">
                    {stat}
                </h1>

                <p className="text-xs md:text-base font-semibold opacity-60">
                    {achievement}
                </p>
            </div>
        </div>
    );
}
export default HeroSection;