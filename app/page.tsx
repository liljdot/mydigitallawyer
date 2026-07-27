import ClientsSection from "./ClientsSection";
import ExpertiseSection from "./ExpertiseSextion";
import HeroSection from "./HeroSection";
import InsightSection from "./InsightSection";
import PeopleSection from "./PeopleSection";
import ProtectSection from "./ProtectSection";
import TestimonialsSection from "./TestimonialsSection";
import TrustedSection from "./TrustedSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-neutral">
      <HeroSection />
      <InsightSection />
      <ExpertiseSection />
      <ProtectSection />
      <PeopleSection />
      <TrustedSection />
      <ClientsSection />
      <TestimonialsSection />
    </main>
  );
}
