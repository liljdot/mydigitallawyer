import AboutSection from "./AboutSection";
import ApproachSection from "./ApproachSection";
import ExpertiseSection from "./ExpertiseSection";
import ProactiveSection from "./ProactiveSection";

const About: React.FC = () => {

    return (
        <main className="flex flex-col w-full bg-neutral gap-10 md:gap-0">
            <AboutSection />
            <ApproachSection />
            <ProactiveSection />
            <ExpertiseSection />
        </main>
    )
}

export default About;