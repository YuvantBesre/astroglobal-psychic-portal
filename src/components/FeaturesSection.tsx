import { Brain, Moon, Stars, Compass, Heart, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Psychometric Analysis',
    description: 'Advanced psychological profiling combined with celestial alignments for deeper self-understanding.',
  },
  {
    icon: Moon,
    title: 'Daily Horoscopes',
    description: 'Personalized daily guidance based on your unique birth chart and current planetary positions.',
  },
  {
    icon: Stars,
    title: 'Birth Chart Reading',
    description: 'Comprehensive natal chart analysis revealing your cosmic blueprint and life path.',
  },
  {
    icon: Compass,
    title: 'Life Path Guidance',
    description: 'Navigate life decisions with clarity using celestial wisdom and psychological insights.',
  },
  {
    icon: Heart,
    title: 'Compatibility Reports',
    description: 'Discover relationship dynamics through synastry and composite chart analysis.',
  },
  {
    icon: Sparkles,
    title: 'Transit Alerts',
    description: 'Real-time notifications for significant planetary transits affecting your chart.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 bg-gradient-cosmic">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-card-foreground mb-4">
            Where Science Meets the{' '}
            <span className="text-gradient-gold">Stars</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our revolutionary approach combines validated psychological assessments 
            with traditional astrological wisdom.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-gold opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
