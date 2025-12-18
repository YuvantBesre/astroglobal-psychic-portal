import { Star, Shield, Users, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: '1M+', label: 'Users Worldwide' },
  { icon: Star, value: '4.9', label: 'App Rating' },
  { icon: Clock, value: '24/7', label: 'Support' },
  { icon: Shield, value: '100%', label: 'Privacy Secure' },
];

const DownloadSection = () => {
  return (
    <section id="download" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Download Now
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card-foreground mb-6">
            Begin Your{' '}
            <span className="text-gradient-gold">Cosmic Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Join millions of seekers who have discovered their true potential through 
            the world's first psychometric astrology experience.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="https://apps.apple.com/app/astroglobal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-4 bg-primary text-primary-foreground rounded-2xl transition-all duration-300 hover:shadow-gold-lg hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs opacity-80">Download on the</p>
                <p className="text-lg font-semibold">App Store</p>
              </div>
            </a>
            
            <a 
              href="https://play.google.com/store/apps/details?id=com.astroglobal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-4 bg-primary text-primary-foreground rounded-2xl transition-all duration-300 hover:shadow-gold-lg hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs opacity-80">Get it on</p>
                <p className="text-lg font-semibold">Google Play</p>
              </div>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="p-4 rounded-xl bg-gradient-card border border-border/50 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.5}s`, animationFillMode: 'forwards' }}
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-display text-2xl md:text-3xl font-bold text-card-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
