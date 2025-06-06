import HeroMain from './components/heroSection/HeroMain';
import NavbarMain from './components/navbar/NavbarMain';
import HeroGradient from './components/heroSection/HeroGradient';
import SubHeroSection from './components/heroSection/SubHeroSection';
import AboutMeMain from './components/aboutSection/AboutMeMain';
import SkillMain from './components/skillsSection/SkillMain'; // Added import statement for SkillMain
import SubSkills from './components/skillsSection/SubSkills';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import ProjectMain from './components/projectSection/ProjectMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import FooterMain from './components/footer/FooterMain';

function App() {
  return (
    <main className='font-body text-white relative overflow-hidden'>
      <NavbarMain/>
      <HeroMain/>
      <HeroGradient/>
      <SubHeroSection/>
      <AboutMeMain/>
      <SkillMain/> {/* Skills Section */}
      <SubSkills/>
      <ExperienceMain/>
      <ProjectMain/>
      <ContactMeMain/>
      <FooterMain/>
    </main>
  )
}

export default App;