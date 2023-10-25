import './Home.scss';
import {Typography} from '../../shared/Typography/Typography'
import {FullphotoWithText} from './components/FullphotoWithText/FullphotoWithText'
import { BenefitsSection } from './components/BenefitsSection/BenefitsSection';
import { Button } from '../../shared/Button/Button';
import { WhoWeHelpSection } from './components/WhoWeHelpSection/WhoWeHelpSection';

const Home = () => {
    return <>
      <Typography variant='h2' Tag='h2'>
          Home
      </Typography>
      <FullphotoWithText/>
      <BenefitsSection/>
      <WhoWeHelpSection></WhoWeHelpSection>
      <Button>Докладніше</Button>
    </>
  };
  
  export default Home;