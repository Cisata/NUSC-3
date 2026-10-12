import { useEffect } from "react";
import { SiteFooter } from "./components/global/SiteFooter";
import { SiteHeader } from "./components/global/SiteHeader";
import { AboutSection } from "./components/sections/AboutSection";
import { CommunitySection } from "./components/sections/CommunitySection";
import { HeroSection } from "./components/sections/HeroSection";
import { MatchesSection } from "./components/sections/MatchesSection";
import { NewsSection } from "./components/sections/NewsSection";
import { PartnersSection } from "./components/sections/PartnersSection";
import { TeamSection } from "./components/sections/TeamSection";
import "./App.css";

function App() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("#main-content > section"),
    );

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-scroll-visible", entry.isIntersecting);
        });
      },
      {
        rootMargin: "-40px 0px -40px 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      section.classList.add("nusc-scroll-fade");
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      sections.forEach((section) => {
        section.classList.remove("nusc-scroll-fade", "is-scroll-visible");
      });
    };
  }, []);

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <MatchesSection />
        <NewsSection />
        <CommunitySection />
        <PartnersSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
