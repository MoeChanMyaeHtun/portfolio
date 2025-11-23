import Head from 'next/head';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import Information from './components/Information';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MOeChanMyaeHtun Portfolio</title>
        <meta name="description" content="MOeChanMyaeHtun Portfolio" />
      </Head>

      <main>
        <Navigation />

        <Hero />

        <Information />

        <WorkSection />
      </main>

      <Footer />
    </div>
  );
}