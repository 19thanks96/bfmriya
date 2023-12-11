import './Home.scss';
import { BenefitsSection } from './components/BenefitsSection/BenefitsSection';
import { WhoWeHelpSection } from './components/WhoWeHelpSection/WhoWeHelpSection';
import { NewsAndEvents } from './components/NewsAndEvents/NewsAndEvents';
import { Assistance } from './components/Assistance/Assistance';
import { CharitableResult } from './components/CharitableResult/CharitableResult';
import { HelpItsEasy } from './components/HelpItsEasy/HelpItsEasy';
import { AboutUs } from './components/AboutUs/AboutUs';
import { MainBlock } from './components/MainBlock/MainBlock';
import { Footer } from '../../shared/Footer/Footer';

const Home = () => {
    return (
    <section className='wrapper-page'>
      <MainBlock/>
      <BenefitsSection/>
      <WhoWeHelpSection></WhoWeHelpSection>
      <NewsAndEvents></NewsAndEvents>
      <Assistance></Assistance>
      <CharitableResult/>
      <HelpItsEasy/>
      <AboutUs/>
      <Footer/>
    </section>
    )
  };
  
  export default Home;