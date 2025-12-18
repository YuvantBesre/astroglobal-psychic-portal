import { Star, Sparkles } from 'lucide-react';
import StarField from './StarField';
import cosmicBg from '@/assets/cosmic-bg.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${cosmicBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      {/* Star Field */}
      <StarField />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float-slow opacity-30">
        <Star className="w-8 h-8 text-primary" />
      </div>
      <div className="absolute bottom-1/3 right-16 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-12 h-12 text-primary" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-primary/20 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <Star className="w-4 h-4 text-primary" fill="currentColor" />
            <span className="text-sm text-card-foreground">Launching Worldwide</span>
          </div>
          
          {/* Heading */}
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="text-card-foreground">Discover Your</span>
            <br />
            <span className="text-gradient-gold">Cosmic Path</span>
          </h1>
          
          {/* Tagline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            World's First Psychometric Astrology
          </p>
          
          {/* Description */}
          <p 
            className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            Experience the revolutionary blend of ancient celestial wisdom and modern 
            psychological science. Unlock insights that transform your understanding of self.
          </p>
          
          {/* App Store Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: '1s' }}
          >
            <a 
              href="https://apps.apple.com/app/astroglobal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-card-foreground" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Download on the</p>
                <p className="text-base font-semibold text-card-foreground">App Store</p>
              </div>
            </a>
            
            <a 
              href="https://play.google.com/store/apps/details?id=com.astroglobal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-card-foreground" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Get it on</p>
                <p className="text-base font-semibold text-card-foreground">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
