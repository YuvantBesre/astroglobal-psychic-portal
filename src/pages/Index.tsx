import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ExpertsSection from '@/components/ExpertsSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ExpertsSection />
      <DownloadSection />
      <Footer />
    </main>
  );
};

export default Index;
