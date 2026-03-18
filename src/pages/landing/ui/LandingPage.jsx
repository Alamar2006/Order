import { Header } from '../../../widgets/header';
import { HeroSection } from '../../../widgets/hero';
import { BenefitsSection } from '../../../widgets/benefits';
import { BundleSection } from '../../../widgets/bundle';
import { IndividualPlannersSection } from '../../../widgets/individual-planners';
import { Footer } from '../../../widgets/footer';

export function LandingPage() {
  
  return (
    <div className="min-h-screen text-text bg-body">
      <Header />
      <HeroSection /> 
   
      
      <div className="w-full border-b border-[--border]"></div>
      
      <main className="max-w-6xl mx-auto px-4">
        <BenefitsSection />
        <BundleSection />
        <IndividualPlannersSection />
      </main>
      <Footer />
    </div>
  );
}