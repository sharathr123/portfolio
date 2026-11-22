import React from 'react';
import { Link } from 'react-router-dom';
import { Send, ArrowRight } from 'lucide-react';
import { appConfig } from '../../../core/config/appConfig';
import { SocialLinks } from '../molecules/SocialLinks';

export function Footer() {
  return (
    <footer className="mt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Call to action dark banner matching design */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#111e25] via-[#13262f] to-[#12363b] text-white p-8 sm:p-12 border border-[#214147] shadow-xl">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-teal-400 text-sm font-semibold mb-2">
                <Send className="w-4 h-4" />
                <span>Let's Work Together!</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                Have a mobile project in mind or open role?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                I specialize in building scalable, production-ready React Native mobile applications with modern architectures, clean code, and smooth user experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <SocialLinks variant="dark-footer" />

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-[#0c1c1f] font-semibold text-sm transition-all shadow-md hover:shadow-lg group"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-4">
          <p>
            © {new Date().getFullYear()} {appConfig.developer.name} — Built with React.js & Clean Architecture.
          </p>
          <div className="flex items-center gap-4">
            <span>React Native (Android & iOS)</span>
            <span>•</span>
            <span>Infanion Software Solutions</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
