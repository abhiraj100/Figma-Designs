import './App.css'
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import FeedBack from './components/Feedback/FeedBack';
import Details from './components/Details/Details';
import Accordion from './components/Accordion/Accordion';

const App = ()  => {

  return (
    <>
      <div className=''>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <WhyChooseUs />
      <FeedBack />
      <Details />
      <Accordion />
      <Footer /> 
      </div>
    </>
  )
}

export default App;
