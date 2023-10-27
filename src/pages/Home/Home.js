import './Home.scss';
import {Typography} from '../../shared/Typography/Typography'
import {FullphotoWithText} from './components/FullphotoWithText/FullphotoWithText'
import { BenefitsSection } from './components/BenefitsSection/BenefitsSection';
import { Button } from '../../shared/Button/Button';
import { WhoWeHelpSection } from './components/WhoWeHelpSection/WhoWeHelpSection';
import { NewsAndEvents } from './components/NewsAndEvents/NewsAndEvents';
import { Assistance } from './components/Assistance/Assistance';
import { CharitableResult } from './components/CharitableResult/CharitableResult';
import { HelpItsEasy } from './components/HelpItsEasy/HelpItsEasy';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Footer } from './components/Footer/Footer';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const {t} = useTranslation()
    return <>
      <Typography variant='h2' Tag='h2'>
          {t("Home")}
      </Typography>
      <FullphotoWithText/>
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