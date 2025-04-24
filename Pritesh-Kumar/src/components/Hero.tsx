import { ArrowDown } from "lucide-react";
import profileImage from "../assets/img.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-6"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
      <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-float -z-10"></div>
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-float-delayed -z-10"></div>

      {/* Content */}
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-7/12 space-y-8 mt-12 md:mt-0">
          <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full animate-fade-down">
            Creative Developer
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight leading-tight opacity-0 animate-fade-up">
            Hi, I'm <span className="text-accent">Pritesh Kumar</span> 
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl mx-auto md:mx-0 max-w-2xl opacity-0 animate-fade-up animate-delay-200">
            An aspiring developer and data enthusiast with a strong passion for
            coding, problem-solving, and building scalable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 opacity-0 animate-fade-up animate-delay-300">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg text-white font-medium bg-accent hover:bg-accent/90 shadow-lg transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-medium bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Profile Image Container - Static Version */}
        <div className="md:w-5/12 flex justify-center md:justify-end">
          <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-0 animate-fade-in animate-delay-200">
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-full border-4 border-accent/30 animate-spin-slow"></div>

            {/* Pulsing border */}
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-accent/20 animate-ping-slow"></div>

            {/* Image Container with enhanced glow effect */}
            <div className="absolute inset-4 rounded-full overflow-hidden shadow-xl hover:shadow-accent/30 transition-all duration-500">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background group relative">
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={profileImage}
                  alt="Navneet Singh"
                  className="object-cover w-full h-full transition-all duration-500 hover:scale-110 filter hover:brightness-105"
                />
              </div>
            </div>

            {/* Improved Decorative Elements */}
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent animate-bounce-delayed"></div>
            <div className="absolute -bottom-4 -left-2 w-6 h-6 rounded-full bg-accent/70 animate-float"></div>
            <div className="absolute top-1/4 -right-4 w-4 h-4 rounded-full bg-accent/50 animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-4 w-5 h-5 rounded-full bg-blue-500/70 animate-float-delayed"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground opacity-0 animate-fade-in animate-delay-500"
      >
        <span className="mb-2">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
