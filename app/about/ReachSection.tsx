import Section from "@/components/layout/Section";
import { AncizarH4 } from "@/components/Typography";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

const ReachSection: React.FC = () => {

    return (
        <Section className={`${openSans.className} bg-base-100 md:bg-neutral`}>
            <div className="flex flex-col bg-base-100 gap-6 md:gap-10">
                <div className="flex flex-col gap-6 text-center md:text-left md:px-14 md:py-10">
                    <AncizarH4 className="text-primary md:text-neutral-content">
                        Our Reach
                        <br />
                        Local Expertise. Cross-Border Perspective.
                    </AncizarH4>

                    <p className="text-neutral-content opacity-60 text-sm md:text-base/8 font-normal">
                        Although proudly based in Nigeria, our services extend beyond its borders.
                        <br /> Through our trusted network of partner law firms and legal professionals across Africa, we support clients with cross-border legal needs and collaborate with experienced local counsel where required.
                        <br /> This enables us to provide coordinated legal solutions for businesses, investors, creatives, and organisations operating across multiple African jurisdictions.
                        <br /> Our growing international client base also includes clients across the United Kingdom, United States, and Canada, reflecting the increasingly global nature of the businesses, ideas, and individuals we serve.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default ReachSection;