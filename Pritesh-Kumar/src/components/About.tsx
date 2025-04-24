import { useEffect, useRef } from 'react';
import profileImage from '../assets/img.jpg';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-6 flex items-center bg-secondary/50"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="space-y-6">
          <div className="text-center mb-8 reveal opacity-0">
            <span className="text-accent text-2xl font-bold tracking-wider inline-block border-b-2 border-accent/30 pb-1">
              ABOUT ME
            </span>
          </div>

          <h2 className="section-title reveal opacity-0">
            Software Developer & Data Enthusiast
          </h2>
          <div className="space-y-4 text-muted-foreground reveal opacity-0 animate-delay-200">
            <p>
              Passionate about <span className="highlight">software development</span> and <span className="highlight">data-driven solutions</span>. I enjoy building scalable applications and leveraging data to solve real-world challenges.
            </p>
            <p>
              Currently pursuing <span className="highlight">B.Tech in Computer Science</span> at Lovely Professional University,with expertise in <span className="highlight">Java, C++, Python, R</span> and <span className="highlight">Data Structures & Algorithms</span>.
            </p>
          </div>

          <div className="mt-8 reveal opacity-0 animate-delay-300">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <div className="space-y-3">
              <div>
                <p className="text-accent">B-Tech in Computer Science and Engineering [2022-2026]</p>
                <p>Lovely Professional University</p>
              </div>
              <div>
                <p className="text-accent">Intermediate [2021]</p>
                <p>D.B Public School</p>
              </div>
              <div>
                <p className="text-accent">Matric [2019]</p>
                <p>D.B Public School</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative reveal opacity-0 animate-delay-400">
          <div className="flex flex-col items-center">
            <div className="relative aspect-square w-full max-w-md mx-auto mb-8">
              <div className="absolute -top-6 -left-6 w-24 h-24 border border-accent rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent rounded-full opacity-20"></div>

              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden bg-accent/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent"></div>
                <img src={profileImage} alt="Software Developer & Data Enthusiast" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="relative z-10 bg-background/80 backdrop-blur-md border-t-4 border-accent rounded-2xl p-4 text-center shadow-lg max-w-xs mx-auto">
              <h3 className="font-mono tracking-wide text-xl">
                <span className="text-primary font-bold">Learn. </span>
                <span className=" text-accent font-bold">Build. </span>
                <span className="text-foreground font-bold">Innovate.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
