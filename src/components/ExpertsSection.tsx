import astrologer1 from '@/assets/astrologer-1.png';
import astrologer2 from '@/assets/astrologer-2.png';
import tarotReader from '@/assets/tarot-reader.png';

const experts = [
  {
    image: astrologer1,
    name: 'Celestia Aurora',
    title: 'Master Astrologer',
    specialty: 'Birth Chart Analysis',
  },
  {
    image: tarotReader,
    name: 'Magnus Stellaris',
    title: 'Tarot Master',
    specialty: 'Psychometric Readings',
  },
  {
    image: astrologer2,
    name: 'Luna Mystica',
    title: 'Vedic Astrologer',
    specialty: 'Cosmic Guidance',
  },
];

const ExpertsSection = () => {
  return (
    <section id="experts" className="relative py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Experts
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-card-foreground mb-4">
            Guided by{' '}
            <span className="text-gradient-gold">Cosmic Masters</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our team of renowned astrologers and psychometric experts bring centuries 
            of combined wisdom to illuminate your path.
          </p>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {experts.map((expert, index) => (
            <div
              key={expert.name}
              className="group text-center opacity-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              {/* Image Container */}
              <div className="relative mx-auto w-48 h-48 mb-6">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors" />
                
                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-colors">
                  <img
                    src={expert.image}
                    alt={`${expert.name} - ${expert.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Floating Star */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
                  <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-1">
                {expert.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-1">
                {expert.title}
              </p>
              <p className="text-muted-foreground text-sm">
                {expert.specialty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
