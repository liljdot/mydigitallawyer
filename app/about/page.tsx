import AboutSection from "./AboutSection";
import ApproachSection from "./ApproachSection";

const About: React.FC = () => {

    return (
        <main className="flex flex-col w-full bg-neutral">
            <AboutSection />
            <ApproachSection />
        </main>
    )
}

export default About;