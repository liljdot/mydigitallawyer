import { Ancizar_Serif, Open_Sans } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
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
            <footer className={`footer sm:footer-horizontal gap-9 bg-primary text-base-content px-30 ${openSans.className}`}>
                <aside className="w-135">
                    <figure className="relative size-29">
                        <Image
                            alt="mdl logo"
                            src="/assets/images/logo-white.png"
                            fill
                        />
                    </figure>
                    <div className="flex flex-col space-y-10">
                        <h4 className={`text-4xl/15 font-semibold ${aSerif.className}`}>
                            Trusted By & Recognised For
                            Recognition. Expertise. Impact.
                        </h4>

                        <div>
                            <AncizarH6 className="font-normal">
                                Let&apos;s Talk
                                <br />
                                Have a legal matter to discuss?
                            </AncizarH6>

                            <p className="text-base">
                                Our Team Is Ready To Provide Practical, Strategic Legal Guidance Tailored To Your Needs.
                            </p>
                        </div>

                        <Link href={"/contact"} className="btn btn-neutral w-fit rounded-full text-neutral-content px-8 py-4">
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