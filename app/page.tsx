import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedWorks from '@/components/FeaturedWorks';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <FeaturedWorks />
      <Services />
      <Testimonials />
      <ContactCTA />
    </div>
  );
}