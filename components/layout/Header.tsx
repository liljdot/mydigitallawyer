"use client"

import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { PiPhoneLight } from "react-icons/pi";
import { Button, Drawer, DrawerContent, DrawerTrigger } from "../ui";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap"
})

const Header: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [sandwichOpen, setSandwichOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const listenerFn = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener("scroll", listenerFn)

        return () => window.removeEventListener("scroll", listenerFn)
    }, [setScrollY])

    return (
        <>
            <header className={`fixed flex w-full z-52 ${sandwichOpen ? "bg-neutral" : scrollY < 50 ? "bg-transparent" : "bg-neutral/70 backdrop-blur-xs"}`}>
                <div className="navbar px-5 md:px-25">
                    {/* navbar start */}
                    <div className="flex-1">
                        <Link href="/" className="block relative w-15 md:w-38 h-11 md:h-29">
                            <Image
                                alt="mdl logo"
                                src="/assets/images/logo.png"
                                fill
                            />
                        </Link>
                    </div>

                    {/* navbar end */}
                    <div className="flex-none self-end">
                        {/* hidden on mobile, show on desktop */}
                        <ul className={`menu menu-horizontal hidden md:flex space-x-7.5 text-base font-semibold ${inter.className}`}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">Services</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li>
                                <Link href="/" className="btn btn-primary text-secondary-content rounded-full"><PiPhoneLight className="size-6" />Contact Us</Link>
                            </li>
                        </ul>

                        {/* show on mobile, hidden on desktop */}
                        <div className="flex md:hidden">
                            <Drawer key={pathname} swipeDirection="up" onOpenChange={setSandwichOpen}>
                                <DrawerTrigger
                                    render={<Button variant="ghost" />}
                                >
                                    <FiMenu className={`absolute size-6 ${sandwichOpen ? 'opacity-0 rotate-180' : 'opacity-100'} transition-all ease-in-out duration-700`} />
                                    <IoClose className={`absolute size-6 ${sandwichOpen ? 'opacity-100' : 'opacity-0 -rotate-180'} transition-all ease-in-out duration-500`} />
                                </DrawerTrigger>
                                <DrawerContent className={`pt-14 ${inter.className}`}>
                                    <div className="flex flex-col py-12 bg-neutral text-base px-4.5 rounded-3xl">
                                        <ul className="flex flex-col space-y-11">
                                            <li><Link href={"/"}>Home</Link></li>
                                            <li><Link href={"/about"}>About</Link></li>
                                            <li className="flex justify-center"><Link href={"/contact"} className="btn btn-primary w-full text-secondary-content rounded-full">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </DrawerContent>
                            </Drawer>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;