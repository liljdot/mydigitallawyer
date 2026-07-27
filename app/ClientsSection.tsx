import Section from "@/components/layout/Section"
import { AncizarH4, AncizarH5 } from "@/components/Typography";
import { Open_Sans } from "next/font/google";
import { StaticImageData } from "next/image";
import Link from "next/link";
import clientImage1 from "@/public/assets/images/client-image-1.png"
import clientImage2 from "@/public/assets/images/client-image-2.png"
import clientImage3 from "@/public/assets/images/client-image-3.png"
import clientImage4 from "@/public/assets/images/client-image-4.png"
import { BOOKING_LINK } from "./data";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

const ClientsSection: React.FC = () => {
    const clientPics: StaticImageData[] = [
        clientImage1,
        clientImage2,
        clientImage3,
        clientImage4
    ]

    return (
        <Section className={`${openSans.className} gap-6`}>
            <div className="card md:card-side gap-6 md:gap-26">
                <div className="card-body gap-6 text-center md:text-left p-0">
                    <AncizarH4 className="text-primary">
                        Our Clients <br /> Built around the people and businesses we serve.
                    </AncizarH4>
                </div>
                <div className="card-actions hidden md:flex min-w-fit justify-center md:justify-start md:items-start">
                    <Link href={BOOKING_LINK} className="btn btn-primary font-normal rounded-full">
                        Book a Consultation
                    </Link>
                </div>
            </div>

            <div className="flex flex-col w-full py-0 text-center md:text-left justify-center">
                <AncizarH5>
                    50+ Clients Served Across Nigeria & Beyond
                </AncizarH5>

                <div className="text-neutral-content opacity-60 text-sm md:text-base/6 font-normal">
                    From ambitious entrepreneurs and innovative startups to creatives, corporate organisations, and individuals, MyDigitalLawyer®️ works with clients navigating complex legal needs and bold opportunities.
                    <br /><br />
                    We are trusted by record labels, Nollywood producers, tech startups, DGN executives, businesses, and clients across Nigeria and internationally.
                </div>
            </div>

            <ClientGallery images={clientPics} />
        </Section>
    )
}

interface ClientGalleryProps {
    images: StaticImageData[]
}

const ClientGallery: React.FC<ClientGalleryProps> = ({ images }) => {

    return (
        <div className="flex flex-row flex-wrap justify-center gap-6">
            {images.map(i => (<ClientImage key={i.src} image={i} />))}
        </div>
    )
}

interface ClientImageProps {
    image: StaticImageData
}

const ClientImage: React.FC<ClientImageProps> = ({ image }) => {

    return (
        <div className={" relative w-41 md:w-70 h-44 md:h-76 rounded-4xl"} style={{ backgroundImage: `url(${image.src})`, backgroundSize: "100%", }} />
    )
}

export default ClientsSection;