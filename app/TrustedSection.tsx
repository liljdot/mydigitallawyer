import Section from "@/components/layout/Section"
import { AncizarH4, AncizarH5 } from "@/components/Typography";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import trustedImage from "@/public/assets/images/trusted-image.png"

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

const TrustedSection: React.FC = () => {

    return (
        <Section className={`${openSans.className} gap-6 md:gap-10`}>
            <div className="flex flex-col max-w-4xl gap-6 text-center md:text-left">
                <AncizarH4 className="text-primary">
                    Trusted & Recognised For <br /> Recognition. Expertise. Impact.
                </AncizarH4>

                <p className="text-neutral-content opacity-60 text-sm md:text-base/6 font-normal">
                    At MyDigitalLawyer®️, our work is shaped by a commitment to legal excellence, thought leadership, and meaningful contributions to innovation and digital rights.
                </p>
            </div>

            <div className="flex flex-col gap-4 md:gap-10">
                <AncizarH5 className="text-center md:text-left">
                    Our expertise and impact have been recognised through:
                </AncizarH5>

                <div className="card md:card-side gap-6 md:gap-0 p-0">
                    <figure className="w-full">
                        <Image
                            alt="recognition"
                            src={trustedImage}
                            className="w-full h-auto"
                        />
                    </figure>
                    <div className="card-body w-full px-6 md:px-16 py-0 text-center md:text-left justify-center">
                        <AncizarH5>
                            Recognition That Speaks to Our Impact
                        </AncizarH5>

                        <div className="text-neutral-content opacity-60 text-sm md:text-base/6 font-normal">
                            Our work is grounded in legal excellence, specialist expertise, and a commitment to shaping conversations that matter. From intellectual property and digital rights to innovation and thought leadership, MyDigitalLawyer®️ continues to earn recognition while serving clients across Nigeria and internationally.
                            <br /><br />
                            Recognition that reflects our expertise. Impact that extends beyond the law.
                        </div>
                    </div>
                </div>

                <div className="text-neutral-content opacity-60 text-center md:text-left text-sm md:text-base/6 font-normal">
                    With a growing client base across Nigeria and internationally—including the United Kingdom, United States, and Canada—MyDigitalLawyer®️ continues to provide trusted, strategic legal counsel to clients navigating a rapidly evolving world.
                </div>
            </div>
        </Section>
    )
}

export default TrustedSection;