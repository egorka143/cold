import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
};