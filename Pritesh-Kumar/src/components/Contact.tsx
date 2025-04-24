import { useEffect, useRef, useState } from 'react';
import { Mail, Send, MapPin, Phone, FileText } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Resume from "../assets/Resume.pdf";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };
  
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
    
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  // Social media links (replace with your actual profile URLs)
  const socialLinks = {
    github: 'https://github.com/pritesh45',
    twitter: 'https://x.com/Pritesh945',
    linkedin: 'https://www.linkedin.com/in/pritesh2004/',
    discord: 'https://discord.com/users/pritesh45'
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium tracking-wider reveal opacity-0">GET IN TOUCH</span>
          <h2 className="section-title reveal opacity-0 mt-2">Contact Me</h2>
          {/* <p className="section-subtitle reveal opacity-0 animate-delay-200">
            Have a project in mind or want to discuss collaboration opportunities? I'd love to hear from you.
          </p> */}
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 reveal opacity-0">
            <div className="bg-card border border-border rounded-xl p-6 h-full">
              <h3 className="text-xl font-semibold mb-6">Let's Talk</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:navneetsingh1825@gmail.com" className="hover:text-accent transition-colors">
                      pritesh2004kr@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href="tel:8676069369" className="hover:text-accent transition-colors">
                      +91-9693333732
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <address className="not-italic">
                      Jalandhar, Punjab<br />
                      India
                    </address>
                  </div>
                </div>
              </div>
              
              {/* Resume Download Button */}
              <div className="mt-8">
                <a 
                  href={Resume}
                  download 
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-colors"
                >
                  <FileText size={18} />
                  <span>Download Resume</span>
                </a>
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-medium mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {Object.entries(socialLinks).map(([social, link]) => (
                    <a 
                      key={social}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/10 hover:text-accent transition-colors"
                      aria-label={`Visit my ${social} profile`}
                    >
                      <FontAwesomeIcon icon={['fab', social as any]} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 reveal opacity-0 animate-delay-300">
            <form 
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your Name'
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Id
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    placeholder='Your Email'
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='Subject of your message'
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  placeholder='Your Message'
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 bg-accent text-white rounded-lg flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
              
              {submitSuccess && (
                <div className="mt-4 p-3 rounded-lg bg-green-50 text-green-700 text-sm animate-fade-in">
                  Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;