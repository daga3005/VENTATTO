'use client'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Galeria from './components/Galery';
import Testimonials from './components/Testimonials';


export default function Home() {

  return (
    <div className="bg-neutral-900 min-h-screen">

      <Hero />
      <Galeria featured/>
      <Testimonials />
      <Footer />
    </div>
  );
}
<style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>