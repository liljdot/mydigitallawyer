import AboutSection from "./AboutSection";
import ApproachSection from "./ApproachSection";
import ProactiveSection from "./ProactiveSection";

const About: React.FC = () => {

    return (
        <main className="flex flex-col w-full bg-neutral">
            <AboutSection />
            <ApproachSection />
            <ProactiveSection />
        </main>
    )
}

export default About;