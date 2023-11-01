import './Home.scss';
import { BenefitsSection } from './components/BenefitsSection/BenefitsSection';
import { WhoWeHelpSection } from './components/WhoWeHelpSection/WhoWeHelpSection';
import { NewsAndEvents } from './components/NewsAndEvents/NewsAndEvents';
import { Assistance } from './components/Assistance/Assistance';
import { CharitableResult } from './components/CharitableResult/CharitableResult';
import { HelpItsEasy } from './components/HelpItsEasy/HelpItsEasy';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Footer } from './components/Footer/Footer';
import { useTranslation } from 'react-i18next';
import { MainBlock } from './components/MainBlock/MainBlock';

const Home = () => {
  const {t} = useTranslation()
    return <>
      <MainBlock/>
      <BenefitsSection/>
      <WhoWeHelpSection></WhoWeHelpSection>
      <NewsAndEvents></NewsAndEvents>
      <Assistance></Assistance>
      <CharitableResult/>
      <HelpItsEasy/>
      <AboutUs/>
      <Footer/>
    </>
  };
  
  export default Home;