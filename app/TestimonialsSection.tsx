import Section from "@/components/layout/Section"
import { AncizarH4, AncizarH5 } from "@/components/Typography";
import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";
import { ComponentProps } from "react";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

interface TestimonialForCard {
    quote: string
    nameTitle: string
    className?: string
}

const TestimonialsSection: React.FC = () => {
    const testimonials: TestimonialForCard[] = [
        {
            quote: "What I appreciate most is the way you take the time to go through things properly. Your advice has helped me make better decisions and understand the importance of protecting my interests from the beginning.",
            nameTitle: "Zion - Music Artiste",
            className: "md:w-[calc((100%-5rem)/4)]"
        },
        {
            quote: "I am so grateful for your guidance and support. You made the legal process feel much clearer and easier to navigate, and I always felt like my concerns were genuinely understood.",
            nameTitle: "Boniface - Entrepreneur",
            className: "md:w-[calc((100%-5rem)/4)]"
        },
        {
            quote: "I’m so happy we went over it together to include that clause that allows me request updates and the information about the project completion dates. \n \n Thank you so much for advising me 🤗 \n \n I noticed I hadn’t heard back from them when the project was supposed to have started and since I knew we had agreed on the email notifications, trust me, I didn’t waste time to ask them how far.",
            nameTitle: "Paula - Film executive Producer",
            className: "md:w-[calc((100%-5rem)/2)]"
        },
        {
            quote: "Where do I start from, your guidance as regards so many decisions in my career has been paramount, from signing my first endorsement deal to legal advice and decisions to do many other things. \n \n I have benefited from your services and expertise.",
            nameTitle: "Zadok - Music Artist"
        },
        {
            quote: "I am so glad we went through the agreement together and included a clause that allowed me to request updates and receive information about the project completion dates. When I noticed I hadn't heard back from them as expected, I knew exactly what to do and acted immediately. Thank you so much for your advice.",
            nameTitle: "Greg - Creative Professional"
        }
    ]

    return (
        <Section className={`${openSans.className} gap-6 md:gap-10`}>
            <div className="flex flex-col max-w-4xl gap-6 text-center md:text-left">
                <AncizarH4 className="text-primary">
                    Client Testimonials <br /> Trusted by Clients. Valued for Our Approach.
                </AncizarH4>

                <p className="text-neutral-content opacity-60 text-sm md:text-base/6 font-normal">
                    Our clients trust us to provide clear, strategic, and commercially focused legal guidance when it matters most. From businesses and creatives to entrepreneurs and individuals, we are proud to support the people and organisations we serve.
                </p>
            </div>

            <TestimonialList testimonials={testimonials} />
        </Section>
    )
}

interface TestimonialListProps {
    testimonials: TestimonialForCard[]
}

const TestimonialList: React.FC<TestimonialListProps> = ({ testimonials }) => {

    return (
        <div className="flex flex-row gap-6 md:gap-10 w-full md:flex-wrap overflow-x-scroll">
            {testimonials.map(t => (<TestimonialCard key={t.nameTitle} className={t.className} testimonial={t} />))}
        </div>
    )
}

interface TestimonialCardProps extends ComponentProps<"div"> {
    testimonial: TestimonialForCard
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    testimonial,
    className,
    ...props
}) => {
    const html = testimonial.quote.replace(/\n/g, "<br />");

    return (
        <div className={cn(
            "flex flex-col w-4/5 bg-base-100 shrink-0 md:w-[calc((100%-2.5rem)/2)] gap-1.5 md:gap-10 px-4 py-6",
            className
        )}
            {...props}
        >
            <p dangerouslySetInnerHTML={{ __html: `"${html}"` }} className="text-base/6 opacity-60">

            </p>
            <AncizarH5 className="font-semibold">
                {testimonial.nameTitle}
            </AncizarH5>
        </div>
    )
}

export default TestimonialsSection;