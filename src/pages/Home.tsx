import AboutApp from '../components/aboutApp';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import PrototypeCarousel from '../components/PrototypeCarrosel';
import Signup from '../components/Signup';
import Solutions from '../components/Solutions';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Solutions />
      <AboutApp/>
      <PrototypeCarousel />
      <Signup/>
      <Footer />
    </>
  );
}
