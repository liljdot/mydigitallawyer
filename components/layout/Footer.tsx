import { Ancizar_Serif, Open_Sans } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import logoWhite from "@/public/assets/images/logo-white.png"
import { AncizarH6 } from "../Typography"
import { BOOKING_LINK, CHAT_LINK } from "@/app/data"

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
            <footer className={`footer lg:footer-horizontal gap-13  md:gap-9 bg-primary text-base-content px-5.5 md:px-30 ${openSans.className}`}>
                <aside className="lg:w-135 flex flex-col md:block items-center">
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

                        <Link href={BOOKING_LINK} className="btn btn-neutral w-fit self-center md:self-start rounded-full text-neutral-content md:px-8 md:py-4">
                            Book a Consultation
                        </Link>
                    </div>
                </aside>

                <aside className="md:py-14 w-full md:w-auto gap-20">
                    <div className="footer footer-horizontal justify-between md:gap-16">
                        <nav className="space-y-9">
                            <AncizarH6 className="font-normal">
                                Quick Links
                            </AncizarH6>
                            <ul className="flex flex-col text-sm md:text-base space-y-4">
                                <Link href={"/#hero"} className="link link-hover">Home</Link>
                                <Link href={"/about"} className="link link-hover">About Us</Link>
                                <Link href={"/#services"} className="link link-hover">Our Services</Link>
                                <Link href={"/#team"} className="link link-hover">Our Team</Link>
                                <Link href={"/#clients"} className="link link-hover">Our Clients</Link>
                                <Link href={"/"} className="link link-hover">Our Policy</Link>
                                <Link href={CHAT_LINK} className="link link-hover">Contact Us</Link>
                            </ul>
                            <div className="hidden md:flex flex-col gap-9">
                                <div>
                                    <AncizarH6 className="font-normal">
                                        Connect With Us
                                    </AncizarH6>
                                </div>

                                <div>
                                    <Link href={""} className="after:content-['·'] after:mx-2 last:after:content-['']">Youtube</Link>
                                    <Link href={""} className="after:content-['·'] after:mx-2 last:after:content-['']">Instagram</Link>
                                    <Link href={""} className="after:content-['·'] after:mx-2 last:after:content-['']">X</Link>
                                </div>
                            </div>
                        </nav>

                        <nav className="space-y-9">
                            <AncizarH6 className="font-normal">
                                Our Expertise
                            </AncizarH6>
                            <ul className="flex flex-col text-sm md:text-base space-y-4">
                                <Link href={""} className="link link-hover">Branding</Link>
                                <Link href={""} className="link link-hover">Design</Link>
                                <Link href={""} className="link link-hover">Marketing</Link>
                                <Link href={""} className="link link-hover">Advertisement</Link>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex md:hidden flex-col w-full items-center gap-9">
                        <div>
                            <AncizarH6 className="font-normal">
                                Connect With Us
                            </AncizarH6>
                        </div>

                        <div>
                            <Link href={""} className="after:content-['·'] after:mx-2 last:after:content-['']">YouTube</Link>
                            <Link href={""} className="after:content-['·'] after:mx-2 last:after:content-['']">Instagram</Link>
                            <Link href={""} className="after:content-['·'] after:mx-2 last:after:content-['']">X</Link>
                        </div>
                    </div>
                    <p className="text-xs text-center md:text-left">© 2026 MyDigitalLawyer®️. All rights reserved. Privacy Policy · Terms of Use · Disclaimer</p>
                </aside>
            </footer>
        </>
    )
}

export default Footer