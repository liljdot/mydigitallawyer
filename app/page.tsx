import ExpertiseSection from "./ExpertiseSextion";
import HeroSection from "./HeroSection";
import InsightSection from "./InsightSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-neutral">
      <HeroSection />
      <InsightSection />
      <ExpertiseSection />
    </main>
  );
}
