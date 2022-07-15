import './Landing.scss';
import SectionMain from "../../components/landing/main/section-main";
import SectionAbout from "../../components/landing/about/section-about";
import SectionTechnologies from "../../components/landing/technologies/section-technologies";

const Landing = () => {
    return (
        <>
            <SectionMain/>
            <SectionAbout/>
            <SectionTechnologies/>
        </>
    )
}
export default Landing
