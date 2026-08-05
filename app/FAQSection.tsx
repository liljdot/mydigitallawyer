import Section from "@/components/layout/Section";
import { AncizarH4, AncizarH6 } from "@/components/Typography";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";
import { BOOKING_LINK, CHAT_LINK } from "./data";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap"
})

interface FAQ {
    question: string
    answer: string | ReactNode
}

const FAQSection: React.FC = () => {
    const faqs: FAQ[] = [
        {
            question: "Do I have to come to your office for a consultation?",
            answer: "Not at all. Our consultation sessions are mostly virtual, which means we can attend to you from anywhere in the world. Whether you are in Lagos, London, or Los Angeles, we are accessible."
        },
        {
            question: "How does the consultation fee work?",
            answer: "Your consultation fee forms part of your brief bill if it is less than the total. If your consultation fee is higher than the brief, the difference is forfeited. If you complete a consultation but do not proceed with a brief, the fee is also forfeited. It is a commitment from both sides."
        },
        {
            question: "How long does it take to process my brief?",
            answer: (<>We are fast paced. As a general guide: <br /> Searches: 2 to 3 working days <br /> Registrations: 5 to 7 working days <br /> Contracts and policy drafts: 3 to 7 working days <br /> Other briefs may vary. Your invoice will always carry the confirmed timeline for your specific matter, and that takes precedence</>)
        },
        {
            question: "Do you work with clients outside Nigeria?",
            answer: "Yes. While we are proudly based in Lagos and Abuja, we serve clients across Africa and internationally. Our work covers cross-border IP matters, entertainment deals, and business structuring for clients operating in multiple jurisdictions."
        },
        {
            question: "Can you register my trademark internationally?",
            answer: "Yes. We handle both Nigerian trademark registration and international filings through the appropriate treaty frameworks. We will advise you on the best strategy based on where you operate and where you need protection."
        },
        {
            question: "I am a creative. Do I need a lawyer or can I handle my IP myself?",
            answer: "You can register some things yourself, but the real risk is not registration — it is what happens in your contracts. Most creatives lose their rights not through theft but through agreements they signed without fully understanding. That is where we come in."
        },
        {
            question: "What if someone has already stolen or is using my work without permission?",
            answer: "We handle IP infringement matters including cease and desist letters, takedown notices, negotiated settlements, and litigation where necessary. The sooner you act, the stronger your position."
        },
        {
            question: "Can you review a contract someone has sent me before I sign?",
            answer: "Absolutely. Contract review is one of our most requested services. Never sign an agreement whether it is a record deal, brand partnership, licensing arrangement, or business contract without having it reviewed by a qualified lawyer first."
        },
        {
            question: "Do you work with startups and small businesses, not just big companies?",
            answer: "Yes. A significant part of our practice is dedicated to startups, entrepreneurs, and growing businesses. Early stage legal structuring is actually where good legal advice has the most impact and the most value."
        },
        {
            question: "How do I get started?",
            answer: (<>Simply <Link className="underline" href={BOOKING_LINK}>book a consultation</Link>  or <Link className="underline" href={CHAT_LINK}>send us a WhatsApp message</Link> and we will take it from there.</>)
        }
    ]

    return (
        <Section className={`${openSans.className} gap-16`}>
            <div className="flex flex-col gap-6 text-center md:text-left">
                <AncizarH4 className="text-primary">
                    Frequently Asked Questions
                </AncizarH4>

                <p className="text-neutral-content opacity-60 text-sm md:text-base/6 font-normal">
                    Clear answers to common questions about our services, approach, and how we can support your legal needs.
                </p>
            </div>
            <FAQList items={faqs} />
        </Section>
    )
}

interface FAQListProps {
    items: FAQ[]
}

const FAQList: React.FC<FAQListProps> = ({ items }) => {

    return (
        <div className="flex flex-row flex-wrap justify-between gap-8">
            {items.map(faq => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    )
}

const FAQItem: React.FC<FAQ> = ({ question, answer }) => {

    return (
        <div className="card w-full md:w-[calc(50%-1rem)] p-0 bg-[#F8F8F8] border">
            <div className="card-body gap-4">
                <AncizarH6 className="font-semibold">
                    {question}
                </AncizarH6>
                <p className="text-neutral-content opacity-60 text-sm md:text-base/6 font-normal" >
                    {answer}
                </p>
            </div>
        </div>
    )
}

export default FAQSection;