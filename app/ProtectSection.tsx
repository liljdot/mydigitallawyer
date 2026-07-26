import Section from "@/components/layout/Section"
import { Open_Sans } from "next/font/google";
import protectImage from "@/public/assets/images/protect-image.png"
import { AncizarH4 } from "@/components/Typography";
import Link from "next/link";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

const ProtectSection: React.FC = () => {

    return (
        <Section className={`${openSans.className} px-0 md:px-0 py-0 md:py-0 bg-cover bg-no-repeat`} style={{ backgroundImage: `url(${protectImage.src})` }}>
            <div className="flex flex-col w-full h-full bg-black/10 backdrop-blur-sm items-center px-5 py-42">
                <div className="card w-full md:w-152 p-0 items-center gap-10 shadow-none">
                    <div className="card-body text-center gap-4 p-0">
                        <AncizarH4 className="text-primary font-semibold">
                            Protect What Matters.
                            <br />
                            Move Forward With Confidence.
                        </AncizarH4>

                        <p className="text-sm md:text-base text-neutral font-normal">
                            From intellectual property to business, technology, and beyond, we&apos;re here to provide legal solutions built around your goals.
                        </p>
                    </div>

                    <div className="card-actions flex-col md:flex-row items-center gap-4 w-fit">
                        <Link href={"/"} className="btn btn-primary font-normal rounded-full">
                            Book a Consultation
                        </Link>
                        <Link href={"/"} className="btn btn-black border border-neutral font-normal rounded-full">
                            Chat With Us
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default ProtectSection;