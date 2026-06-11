import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AwfulMarquee from "@/components/AwfulMarquee";
import StatementZoom from "@/components/StatementZoom";
import DemoTerminal from "@/components/DemoTerminal";
import Services from "@/components/Services";
import Features from "@/components/Feature";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import NeuralHeroBackground from "@/components/NeuralHeroBackground";

const Index = () => {
  return (
    <div className="tech-landing dark relative flex min-h-screen flex-col">
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
        <NeuralHeroBackground />
      </div>
      <div className="awful-overlay pointer-events-none fixed inset-0 z-[2]" aria-hidden />
      <Navbar />
      <main className="relative z-[3] flex-1">
        <Hero>
          <StatementZoom />
          <AwfulMarquee />
          <DemoTerminal />
          <Services />
          <Features />
          <CallToAction />
        </Hero>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
