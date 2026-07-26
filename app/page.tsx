import ExpertiseSection from "./ExpertiseSextion";
import HeroSection from "./HeroSection";
import InsightSection from "./InsightSection";
import PeopleSection from "./PeopleSection";
import ProtectSection from "./ProtectSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-neutral">
      <HeroSection />
      <InsightSection />
      <ExpertiseSection />
      <ProtectSection />
      <PeopleSection />
    </main>
  );
}
