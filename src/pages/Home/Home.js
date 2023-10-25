import './Home.scss';
import {Typography} from '../../shared/Typography/Typography'
import {FullphotoWithText} from './components/FullphotoWithText/FullphotoWithText'
import { BenefitsSection } from './components/BenefitsSection/BenefitsSection';
import { Button } from '../../shared/Button/Button';
import { WhoWeHelpSection } from './components/WhoWeHelpSection/WhoWeHelpSection';
import { NewsAndEvents } from './components/NewsAndEvents/NewsAndEvents';
import { Assistance } from './components/Assistance/Assistance';

const Home = () => {
    return <>
      <Typography variant='h2' Tag='h2'>
          Home
      </Typography>
      <FullphotoWithText/>
      <BenefitsSection/>
      <WhoWeHelpSection></WhoWeHelpSection>
      <NewsAndEvents></NewsAndEvents>
      <Assistance></Assistance>
      
    </>
  };
  
  export default Home;