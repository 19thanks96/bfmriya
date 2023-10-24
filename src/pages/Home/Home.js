import './Home.scss';
import {Typography} from '../../shared/Typography/Typography'
import {FullphotoWithText} from './components/FullphotoWithText/FullphotoWithText'
import { BenefitsSection } from './components/BenefitsSection/BenefitsSection';

const Home = () => {
    return <>
      <Typography variant='h2' Tag='h2'>
          Home
      </Typography>
      <FullphotoWithText/>
      <BenefitsSection/>
    </>
  };
  
  export default Home;