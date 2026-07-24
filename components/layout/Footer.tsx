import { Ancizar_Serif, Open_Sans } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import logoWhite from "@/public/assets/images/logo-white.png"
import { AncizarH6 } from "../Typography"

const aSerif = Ancizar_Serif({
    variable: "--font-ancizar-serif",
    subsets: ["latin"],
    display: "swap"
})

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

const Footer: React.FC = () => {

    return (
        <>
            <footer className={`footer md:footer-horizontal gap-9 bg-primary text-base-content px-5.5 md:px-30 ${openSans.className}`}>
                <aside className="md:w-135 flex flex-col md:block items-center">
                    <figure className="relative size-51 md:size-39">
                        <Image
                            alt="mdl logo"
                            src={logoWhite}
                            fill
                        />
                    </figure>
                    <div className="flex flex-col space-y-10">
                        <h4 className={`self-center md:self-start max-w-79 md:max-w-full text-center md:text-left text-lg/6 md:text-4xl/15 font-semibold ${aSerif.className}`}>
                            Trusted By & Recognised For
                            Recognition. Expertise. Impact.
                        </h4>

                        <div>
                            <AncizarH6 className="text-center md:text-left text-lg/6 md:text-2xl font-normal">
                                Let&apos;s Talk
                                <br />
                                Have a legal matter to discuss?
                            </AncizarH6>

                            <p className="text-sm/6 md:text-base text-center md:text-left mt-2 md:mt-0">
                                Our Team Is Ready To Provide Practical, Strategic Legal Guidance Tailored To Your Specific Needs.
                            </p>
                        </div>

                        <Link href={"/contact"} className="btn btn-neutral w-fit self-center md:self-start rounded-full text-neutral-content md:px-8 md:py-4">
                            Book a Consultation
                        </Link>
                    </div>
                </aside>

                <aside className="py-14">
                    <div className="footer footer-horizontal gap-16">
                        <nav className="space-y-9">
                            <AncizarH6 className="font-normal">
                                Quick Links
                            </AncizarH6>
                            <ul className="flex flex-col space-y-4">
                                <a className="link link-hover">Branding</a>
                                <a className="link link-hover">Design</a>
                                <a className="link link-hover">Marketing</a>
                                <a className="link link-hover">Advertisement</a>
                            </ul>
                            <div>
                                <AncizarH6 className="font-normal">
                                    Connect With Us
                                </AncizarH6>
                            </div>
                        </nav>

                        <nav className="space-y-9">
                            <AncizarH6 className="font-normal">
                                Our Expertise
                            </AncizarH6>
                            <ul className="flex flex-col space-y-4">
                                <a className="link link-hover">Branding</a>
                                <a className="link link-hover">Design</a>
                                <a className="link link-hover">Marketing</a>
                                <a className="link link-hover">Advertisement</a>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </footer>
        </>
    )
}

export default Footer