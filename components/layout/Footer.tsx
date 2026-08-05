import { Ancizar_Serif, Open_Sans } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import logoWhite from "@/public/assets/images/logo-white.png"
import { AncizarH4, AncizarH6 } from "../Typography"
import { BOOKING_LINK, CHAT_LINK, IG_LINK, X_LINK, YT_LINK } from "@/app/data"
import DialogOrDrawer from "../ui/DialogOrDrawer"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

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
    const ppContent: ReactNode = (
        <>
            {/* Header */}
            <header className="border-b bg-background px-8 md:px-15 pt-6 md:pt-25">
                <div className="flex flex-col gap-4">
                    <AncizarH4 className="text-primary text-center md:text-left">
                        MyDigitalLawyer®️ Website Legal Policies
                    </AncizarH4>
                    <AncizarH6 className="mt-1 text-sm text-center md:text-left">
                        <Link href="#disclaimer">Disclaimer</Link> · <Link href="#terms">Terms and Conditions</Link> · <Link href="#privacy">Privacy Policy</Link> · <Link href="#refund">Refund Policy</Link>
                    </AncizarH6>
                </div>
            </header>

            {/* Content */}
            <main className={`flex flex-col flex-1 gap-40 overflow-y-auto px-5 md:px-15 py-6 ${openSans.className}`}>
                <div className="flex flex-col gap-4" id="disclaimer">
                    <div className="flex flex-col gap-2">
                        <AncizarH4>
                            Disclaimer
                        </AncizarH4>

                        <p className={`font-medium ${aSerif.className}`}>
                            Last updated: July 2026
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-xs md:text-sm">
                            The information provided on this website (www.mydigitallawyer.ng ) by MyDigitalLawyer (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is for general informational purposes only. While we take care to ensure that the content is accurate and current, it does not constitute legal advice and must not be relied upon as a substitute for professional counsel.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            No Legal Advice
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            The content on this Site is general in nature and may not reflect current legal developments or apply to your particular circumstances. You should not act, or refrain from acting, on the basis of any material on this Site without first obtaining professional legal advice specific to your situation.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            No Lawyer–Client Relationship
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            Your use of this Site, and any communication you send through it — including via our contact channels, messaging platforms, or booking links — does not create a lawyer–client relationship between you and MyDigitalLawyer. Such a relationship arises only after we have completed our client-onboarding and conflict-of-interest checks and have confirmed our engagement with you in writing.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            Confidential Information
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            Please do not send us confidential or sensitive information through this Site, by email, or through messaging channels until a formal engagement has been established in writing. Information submitted before that point may not be treated as privileged or confidential.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            No Guarantee of Outcomes
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            References on this Site to past matters, results, client experiences, or testimonials are illustrative only. Each legal matter turns on its own facts, and prior results neither guarantee nor predict the outcome of any future matter.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            Third-Party Links
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            This Site may contain links to third-party websites and services, including scheduling and messaging tools. We do not control, endorse, or accept responsibility for the content, accuracy, or practices of those third parties.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            Jurisdiction
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            MyDigitalLawyer is a legal practice based in Nigeria. While we support clients internationally, our lawyers are qualified to practice in Nigeria alongside our allies in other African countries , the United Kingdom and the United States of America. Matters governed by the laws of other jurisdictions may require locally qualified counsel, whom we are able to help coordinate.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            Contact
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            For questions regarding this Disclaimer, please contact us at info@mydigitallawyer.ng.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4" id="terms">
                    <div className="flex flex-col gap-2">
                        <AncizarH4>
                            Terms and Conditions
                        </AncizarH4>

                        <p className={`font-medium ${aSerif.className}`}>
                            Last updated: July 2026
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-xs md:text-sm">
                            These Terms and Conditions govern your access to and use of the MyDigitalLawyer website (www.mydigitallawyer.ng ). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please discontinue use of the Site.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            1. Definitions
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            &quot;We,&quot; &quot;us,&quot; and &quot;our&quot; refer to MyDigitalLawyer. &quot;You&quot; and &quot;your&quot; refer to the person accessing or using the Site. &quot;Content&quot; means all material made available on the Site, including text, graphics, logos, images, and marks.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            2. Use of the Site
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            You may use this Site for lawful purposes only. You agree not to use the Site in any manner that is unlawful, that infringes the rights of others, or that could damage, disable, overburden, or impair the Site or interfere with any other party’s use of it.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            3. No Legal Advice
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            The Content is provided for general information only and does not constitute legal advice, nor does your use of the Site create a lawyer–client relationship. Please refer to our Disclaimer for further detail.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            4. Intellectual Property
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            Unless otherwise stated, all Content on this Site — including the &quot;MyDigitalLawyer&quot; name, logo, and associated marks — is owned by or licensed to us and is protected by applicable intellectual property laws. You may not copy, reproduce, republish, distribute, or otherwise exploit any Content without our prior written consent.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            5. Bookings and Third-Party Services
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            Consultations may be scheduled through third-party tools, and communications may take place through third-party messaging platforms. Your use of those services is subject to their respective terms and privacy policies, over which we have no control and for which we accept no responsibility.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            6. Fees, Engagement, and Refunds
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            Where we agree to provide services to you, the terms of that engagement — including fees, scope, and payment arrangements — will be set out in a separate engagement letter or invoice. Refunds, where applicable, are governed by our Refund Policy.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            7. Limitation of Liability
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            To the fullest extent permitted by law, MyDigitalLawyer shall not be liable for any loss or damage, whether direct, indirect, incidental, or consequential, arising from your use of, or inability to use, this Site or from reliance on any Content. The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express or implied
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            8. Indemnity
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            You agree to indemnify and hold harmless MyDigitalLawyer, its partners, and its personnel from and against any claims, liabilities, losses, or expenses arising out of your misuse of the Site or breach of these Terms.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            9. Changes to These Terms
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            We may revise these Terms from time to time. Revisions take effect once posted on the Site. Your continued use of the Site following any change constitutes acceptance of the revised Terms.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            10. Governing Law and Jurisdiction
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any dispute arising out of or in connection with them shall be subject to the exclusive jurisdiction of the Nigerian courts.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            11. Contact
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            For questions regarding these Terms, please contact us at info@mydigitallawyer.ng.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4" id="privacy">
                    <div className="flex flex-col gap-2">
                        <AncizarH4>
                            Privacy Policy
                        </AncizarH4>

                        <p className={`font-medium ${aSerif.className}`}>
                            Last updated: July 2026
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-xs md:text-sm">
                            MyDigitalLawyer is committed to protecting your privacy and handling your personal data responsibly. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website (www.mydigitallawyer.ng ), and sets out your rights in relation to that information. We process personal data in accordance with the Nigeria Data Protection Act 2023 (the &quot;NDPA&quot;) and, where it applies to you, the United Kingdom and European Union General Data Protection Regulation (the &quot;GDPR&quot;).
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            1.  Information We Collect
                        </AncizarH6>
                        <div className="font-medium text-xs md:text-sm">
                            We may collect the following categories of information:
                            <ul className="list-disc list-inside flex flex-col gap-2">
                                <li>Information you provide directly — your name, email address, telephone number, and the content of any enquiry when you contact us, request a consultation, or communicate with us.</li>
                                <li>Booking information — details you provide when scheduling a consultation through our thirdparty scheduling provider.</li>
                                <li>Technical and usage data — your IP address, browser and device information, and details of how you interact with the Site, collected automatically through cookies and analytics tools. </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            2. How We Use Your Information
                        </AncizarH6>
                        <div className="font-medium text-xs md:text-sm">
                            We use your personal data to:
                            <ul className="list-disc list-inside flex flex-col gap-2">
                                <li>respond to your enquiries and provide the services you request; </li>
                                <li>arrange and manage consultations; • carry out client-onboarding, identity, and conflict-of-interest checks; </li>
                                <li>operate, maintain, and improve the Site; and • comply with our legal, regulatory, and professional obligations.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            3.Lawful Basis for Processing
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            We process your personal data where: you have given consent; processing is necessary to respond to your request or to perform a service; we have a legitimate interest in doing so that is not overridden by your rights; or we are required to process it to comply with a legal obligation.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            4. Disclosure of Your Information
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            We do not sell your personal data. We may disclose it to trusted service providers who support the operation of the Site and our practice — including our website host, scheduling provider, and messaging platforms — and to regulatory, judicial, or governmental authorities where required by law. We require these providers to safeguard your data and to process it only as instructed.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            5. International Data Transfers
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            Certain of our service providers operate outside Nigeria, including in the United States and the European Union. Where your personal data is transferred internationally, we take reasonable steps to ensure that it remains protected in accordance with the NDPA, the GDPR, and other applicable data-protection laws.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            6. Data Retention
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            We retain personal data only for as long as necessary to fulfil the purposes set out in this Policy, to satisfy our legal and professional obligations, and to resolve any disputes.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            7. Data Security
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, loss, or misuse. However, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            8. Your Rights
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            Subject to applicable law, you have the right to access, correct, update, or request deletion of your personal data; to object to or restrict its processing; to request its portability; and to withdraw consent at any time. To exercise any of these rights, please contact us using the details in Section 12. You also have the right to lodge a complaint with the relevant data-protection authority
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            9. Cookies
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            This Site uses cookies to enable core functionality and to help us understand how visitors use it. You may control or disable cookies through your browser settings, although some features of the Site may not function properly if you do.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            10. Children’s Privacy
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            This Site is not directed at children, and we do not knowingly collect personal data from any person under the age of [16/18]. If we become aware that we have collected such data, we will take steps to delete it.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            11. Changes to This Policy
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            We may update this Privacy Policy from time to time. The current version will always be available on the Site, bearing the &quot;Last updated&quot; date shown above
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            12. Contact Us
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            If you have any questions about this Privacy Policy, or wish to exercise your rights, please contact our data protection contact at admin@mydigitallawyer.ng or [insert postal address].
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4" id="refund">
                    <div className="flex flex-col gap-2">
                        <AncizarH4>
                            Refund Policy
                        </AncizarH4>

                        <p className={`font-medium ${aSerif.className}`}>
                            Last updated: July 2026
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-xs md:text-sm">
                            This Refund Policy sets out the basis on which MyDigitalLawyer (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides refunds for fees paid in respect of our legal services. It should be read together with your engagement letter and the applicable invoice, which govern the specific terms of your matter.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            1.   Our Commitment
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            We are committed to delivering our services professionally and to a high standard. Where a client is dissatisfied, or where circumstances lead to the early conclusion of a matter, refunds (where available) are handled in accordance with the terms of this Policy.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            2. Basis of Refund
                        </AncizarH6>
                        <div className="font-medium text-xs md:text-sm">
                            The basis on which any refund is calculated depends on the nature of the service:
                            <ul className="list-disc list-inside flex flex-col gap-2">
                                <li>Registration services — refunds are calculated on a net basis. Any refund payable will be the amount you have paid, less all expenditure, disbursements, and costs already incurred on your matter, and less the value of professional work already performed, in each case as itemised in the applicable invoice. </li>
                                <li>MyDigitalLawyer elects to refund a retainer, that refund is calculated on a pro-rata basis, reflecting the unused portion of the retainer as at the date of the refund</li>
                            </ul>
                            For the purposes of the net-basis calculation above, expenditure and costs already incurred include, but are not limited to:
                            <ul className="list-disc list-inside flex flex-col gap-2">
                                <li>filing, registration, and other official or statutory fees;</li>
                                <li>payments made to third parties on your behalf (for example, agents, experts, or courier and administrative costs); </li>
                                <li>professional fees for work already carried out up to the date of your refund request</li>
                                Amounts that have already been paid to third parties or expended on your behalf are non-recoverable and will not be refunded.
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            3. Consultation Fees
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            Your consultation fee is first the fee paid to consult with a lawyer for clarity on your issues or lega advice and it forms part of your overall brief fee where you proceed with a brief within 2 working days of your consultation and inthat case, it is credited towards the balance payable. Where you complete a consultation but do not proceed to instruct us on a brief, the consultation fee is likewise forfeited. The consultation fee represents a mutual commitment between you and MyDigitalLawyer.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            4. Non-Refundable Items
                        </AncizarH6>
                        <div className="font-medium text-xs md:text-sm">
                            The following are not refundable:
                            <ul className="list-disc list-inside flex flex-col gap-2">
                                <li>fees for services already rendered;</li>
                                <li>disbursements and third-party costs already incurred; </li>
                                <li>consultation fees, in the circumstances described in Section 3; and</li>
                                <li>any amount expressly stated to be non-refundable in your engagement letter or invoice.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            5. Requesting a Refund
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            To request a refund, please contact us in writing at admin@mydigitallawyer.ng, quoting your name, matter reference, and the invoice to which your request relates. We will review your request and provide a written breakdown of any refund due, calculated in accordance with Section 2.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            6. Processing of Refunds
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            Approved refunds will be processed within [insert number] business days of confirmation, using the original method of payment where reasonably practicable, or by bank transfer to an account in your name.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            7. Changes to This Policy
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            We may update this Refund Policy from time to time. The current version will always be available on our website, bearing the &quot;Last updated&quot; date shown above.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <AncizarH6 className="text-sm">
                            8. Contact
                        </AncizarH6>
                        <p className="font-medium text-xs md:text-sm">
                            For questions regarding this Refund Policy, please contact us at admin@mydigitallawyer.ng.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )

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
                            Do you have a specific matter that needs claritiy?
                        </h4>

                        <div>
                            <AncizarH6 className="text-center md:text-left text-lg/6 md:text-2xl font-normal">
                                Are you looking for legal counsel to answer your specific questions.
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
                                <DialogOrDrawer className={"md:top-1/2 md:-translate-y-1/2 md:w-[92vw] md:h-[90vh] md:max-w-350 flex-col p-0 overflow-scroll scroll-smooth"} content={ppContent}><a className="link link-hover"> Our Policy</a></DialogOrDrawer>
                                <Link href={CHAT_LINK} className="link link-hover">Contact Us</Link>
                            </ul>
                            <div className="hidden md:flex flex-col gap-9">
                                <div>
                                    <AncizarH6 className="font-normal">
                                        Connect With Us
                                    </AncizarH6>
                                </div>

                                <div>
                                    <Link href={YT_LINK} className="after:content-['·'] after:mx-2 last:after:content-['']">Youtube</Link>
                                    <Link href={IG_LINK} className="after:content-['·'] after:mx-2 last:after:content-['']">Instagram</Link>
                                    <Link href={X_LINK} className="after:content-['·'] after:mx-2 last:after:content-['']">X</Link>
                                </div>
                            </div>
                        </nav>

                        <nav className="space-y-9">
                            <AncizarH6 className="font-normal">
                                Our Expertise
                            </AncizarH6>
                            <ul className="flex flex-col text-sm md:text-base space-y-4">
                                <Link href={"/#ip-law"} className="link link-hover">Intellectual Property Law</Link>
                                <Link href={"/#media-law"} className="link link-hover">Media & Entertainment Law</Link>
                                <Link href={"/#tech-law"} className="link link-hover">Technology Law</Link>
                                <Link href={"/#corporate-law"} className="link link-hover">Corporate Governance & Compliance</Link>
                                <Link href={"/#family-law"} className="link link-hover">Property & Real Estate Law</Link>
                                <Link href={"/#family-law"} className="link link-hover">Family Law</Link>
                                <Link href={"/#immigration-law"} className="link link-hover">Immigration Law</Link>
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
                            <Link href={YT_LINK} className="after:content-['·'] after:mx-2 last:after:content-['']">YouTube</Link>
                            <Link href={IG_LINK} className="after:content-['·'] after:mx-2 last:after:content-['']">Instagram</Link>
                            <Link href={X_LINK} className="after:content-['·'] after:mx-2 last:after:content-['']">X</Link>
                        </div>
                    </div>
                    <p className="text-xs text-center md:text-left">© 2026 MyDigitalLawyer®️. All rights reserved. <LegalPopup content={ppContent}>Privacy Policy · Terms of Use · Disclaimer</LegalPopup></p>
                </aside>
            </footer>
        </>
    )
}

interface LegalPopupProps {
    children: ReactNode
    content: ReactNode
    className?: string
}

const LegalPopup: React.FC<LegalPopupProps> = ({ children, content, className }) => {
    return (
        <DialogOrDrawer className={cn(`md:top-1/2 md:-translate-y-1/2 md:w-[92vw] md:h-[90vh] md:max-w-350 flex-col p-0 overflow-scroll scroll-smooth`, className)} content={content}>
            {children}
        </DialogOrDrawer>
    )
}

export default Footer