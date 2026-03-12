import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Projects } from "@/components/Projects";
import { Differentiators } from "@/components/Differentiators";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen gradient-mesh">
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <GitHubActivity />
        <Projects />
        <Differentiators />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
