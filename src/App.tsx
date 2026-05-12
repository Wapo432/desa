/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Vision from './components/Vision';
import Services from './components/Services';
import News from './components/News';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-village-cream">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Vision />
        <Services />
        <News />
      </main>
      <Footer />
    </div>
  );
}


