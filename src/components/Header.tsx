import logo from '@/assets/Logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Astroglobal Logo" 
            className="h-10 w-auto object-contain"
          />
          <span className="font-display text-xl font-semibold text-card-foreground">
            Astroglobal
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#experts" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Our Experts
          </a>
          <a href="#download" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Download
          </a>
        </nav>

        {/* CTA Button */}
        <a 
          href="#download"
          className="px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-gold-light transition-colors shadow-gold"
        >
          Get App
        </a>
      </div>
    </header>
  );
};

export default Header;
