import { Star, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <footer className="relative py-16 bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 w-[250px] bg-white mb-4">
                <img
                  src={logo}
                  alt="Astroglobal Logo"
                  className="object-contain"
                />
              </div>
              <p className="text-muted-foreground text-sm mb-6 max-w-sm">
                World's first psychometric astrology app. Combining ancient celestial wisdom
                with modern psychological science to illuminate your cosmic path.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold text-card-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#experts" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Our Experts
                  </a>
                </li>
                <li>
                  <a href="#download" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Download App
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-lg font-semibold text-card-foreground mb-4">
                Support
              </h4>
              <a
                href="mailto:support@astroglobal.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@astroglobal.com</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Astroglobal. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
