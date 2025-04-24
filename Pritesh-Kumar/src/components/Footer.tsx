import { ArrowUp } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 px-6 bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <a
              href="#home"
              className="text-4xl font-serif font-bold tracking-tight"
            >
              Pritesh Kumar<span className="text-accent">.</span>
            </a>
            <p className="mt-4 text-muted-foreground">
              An aspiring developer and data enthusiast with a strong passion
              for coding, problem-solving, and building scalable solutions.
            </p>

            <br />

            <h3 className="font-mono tracking-wide text-xl">
              <span className="text-primary font-bold">Learn. </span>
              <span className=" text-accent font-bold">Build. </span>
              <span className="text-foreground font-bold">Innovate.</span>
            </h3>
            {/* </div> */}
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Let's Connect</h3>
            <ul className="space-y-2">
              {[
                { name: "GitHub", url: "https://github.com/pritesh45" },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/pritesh2004/",
                },
                { name: "Twitter", url: "https://x.com/Pritesh945" },
                {
                  name: "Discord",
                  url: "https://discord.com/users/pritesh45",
                },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            copyright © {new Date().getFullYear()} Pritesh Kumar. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
