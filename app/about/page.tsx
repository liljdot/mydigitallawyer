import AboutSection from "./AboutSection";
import ApproachSection from "./ApproachSection";
import ChooseSection from "./ChooseSection";
import CommitmentSection from "./CommitmentSection";
import ExperienceSection from "./ExperienceSection";
import ExpertiseSection from "./ExpertiseSection";
import ProactiveSection from "./ProactiveSection";
import ReachSection from "./ReachSection";

const About: React.FC = () => {

    return (
        <main className="flex flex-col w-full bg-neutral gap-10 md:gap-0">
            <AboutSection />
            <ApproachSection />
            <ProactiveSection />
            <ExpertiseSection />
            <ExperienceSection />
            <ReachSection />
            <ChooseSection />
            <CommitmentSection />
        </main>
    )
}

export default About;