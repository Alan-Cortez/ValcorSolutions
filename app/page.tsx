import Navbar from '@/components/public/Navbar';
import Hero from '@/components/public/Hero';
import Services from '@/components/public/Services';
import Portfolio from '@/components/public/Portfolio';
import Process from '@/components/public/Process';
import Stats from '@/components/public/Stats';
import Reviews from '@/components/public/Reviews';
import FAQ from '@/components/public/FAQ';
import Contact from '@/components/public/Contact';
import Footer from '@/components/public/Footer';
import Chatbot from '@/components/public/Chatbot';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Stats />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
