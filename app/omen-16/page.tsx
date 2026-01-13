import HeroSection from './components/HeroSection';
import FeaturesCarousel from './components/FeaturesCarousel';
import ProductHeader from './components/ProductHeader';
import Gallery from './components/Gallery';
import DesignSection from './components/DesignSection';
import PerformanceSection from './components/PerformanceSection';
// import BatterySection from './components/BatterySection';
import SecuritySection from './components/SecuritySection';
import DisplaySection from './components/DisplaySection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ProductHeader />
      <HeroSection />
      <Gallery />
      <FeaturesCarousel />
      <DesignSection />
      <PerformanceSection />
      {/* <BatterySection /> */}
      <SecuritySection />
      <DisplaySection />
    </div>
  )
}