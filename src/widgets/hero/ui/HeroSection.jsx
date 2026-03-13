

import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';
import { HeroTrustBar } from './HeroTrustBar';
import { animations, mediaQueries, interactiveStyles } from './HeroStyles';

export function HeroSection() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-[clamp(1rem,2vw,2rem)] py-[clamp(2rem,5vw,40rem)] flex flex-col gap-[clamp(2rem,5vw,4rem)]">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,6vw,5rem)] items-center w-full">
        <HeroContent />
        <HeroVisual />
      </div>

      
      <HeroTrustBar />

      
      <style jsx>{animations}</style>
      <style jsx>{interactiveStyles}</style>
      <style jsx>{mediaQueries}</style>
    </section>
  );
}