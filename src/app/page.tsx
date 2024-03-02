
import IntroSection from './_components/intro-section';
import AboutSection from './_components/about-section';
import FeatureSection from './_components/feature-section';

export default function Home() {
  return (
    <main className='pt-20 md:pt-18'>
      <IntroSection />
      <AboutSection />
      <FeatureSection />
    </main>
  );
}