import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import image1 from "../assets/digitallearn.png";
import Bank from "../assets/alumini.jpeg";

import work1 from "../assets/shuttle.jpeg";
import Ipl from "../assets/ipl.png";
import Password from "../assets/tictactoe.png";
import currency from "../assets/currency.png";
const projects = [
  {
    title: "Tic-Tac-Toe Game",
    description:
      "Tic Tac Toe is a classic two-player game played on a 3×3 grid. Players take turns marking X or O. The first to align three symbols in a row, column, or diagonal wins.",
    tags: ["React", "Tailwind CSS", "Web Development"],
    demoUrl: "https://tic-tac-toe-psi-sage-54.vercel.app/",
    githubUrl: "https://github.com/pritesh45/Tic-Tac-Toe",
    imageBg: "bg-yellow-50 dark:bg-yellow-900/20",
    iconColor: "text-yellow-500",
    image: Password,
  },
  {
    title: "Shuttle Management System",
    description:
      "A Shuttle Management System is a web-based platform designed to manage and streamline campus or corporate shuttle services. It allows users to book rides, view schedules, track shuttle locations, and manage trip history.",
    tags: ["HTML", "CSS", "JavaScript","React"],
    demoUrl: "https://project-shuttle-management-client.vercel.app/",
    githubUrl: "https://github.com/pritesh45/Project-Shuttle-Management-Client",
    imageBg: "bg-red-50 dark:bg-red-900/20",
    iconColor: "text-red-500",
    image: work1,
  },
  {
    title: "Study.edu",
    description:
      "Study.edu is a learning platform where students can access quality educational content anytime. Teachers can easily upload and share lectures, making learning seamless and accessible.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    //demoUrl: "https://yumexpress-delivery.onrender.com/",
    githubUrl: "https://github.com/pritesh45/Study.Edu",
    imageBg: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-500",
    image: image1,
  },
  {
    title: "Alumini Network System",
    description:
      "An Alumni Network System is a web platform designed to connect former students of an institution. It enables alumni to stay in touch, share updates, find opportunities, mentor current students, and collaborate professionally.",
      tags: ["MongoDB", "Express.js", "React", "Node.js"],
    // demoUrl: "#",
    githubUrl: "https://github.com/pritesh45/AlumniLinkUp",
    imageBg: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-500",
    image: Bank,
  },
  {
    title: "IPL Data Analysis",
    description:
      "An interactive data visualization project designed using MS Excel, featuring dynamic charts, pivot tables, and dashboards for insightful analysis and data-driven decision-making.",
    tags: ["MS Excel", "Data Analysis", "Data Visualization"],
    demoUrl:
      "https://www.canva.com/design/DAGRydbB30E/pUjWIJSTUAD1Pf15WDwCGQ/view?utm_content=DAGRydbB30E&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
    //githubUrl:
      //"https://github.com/pritesh45/Tableau-Dashboards",
    imageBg: "bg-green-50 dark:bg-green-900/20",
    iconColor: "text-green-500",
    image: Ipl,
  },
  
  // Add more projects here as needed
  
  {
    title: "Currency Converter",
    description:
      "A currency converter web application built with React.js and Tailwind CSS, featuring real-time exchange rates and a user-friendly interface.",
    tags: ["React", "Tailwind CSS", "API Integration"],
    demoUrl: "https://navneetsingh04.github.io/Currency-Converter/",
    //githubUrl: "https://github.com/pritesh45/Currency-Converter",
    imageBg: "bg-indigo-50 dark:bg-indigo-900/20",
    iconColor: "text-indigo-500",
    image: currency,
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const displayedProjects = projects;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
        <span className="text-accent text-sm font-medium tracking-wider reveal opacity-0">MY WORK</span>
          <h2 className="section-title reveal opacity-0 mt-2">
          Projects
          </h2>
          <p className="section-subtitle reveal opacity-0 animate-delay-200">
            A curated collection of my recent work, showcasing my expertise in
            creating innovative digital solutions.
          </p>
        </div>

        {/* Grid optimized for 600x400px images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal opacity-0 animate-delay-300">
          {displayedProjects.map((project, index) => (
            <article
              key={index}
              className="group relative flex flex-col rounded-xl overflow-hidden border border-border card-hover bg-card"
              style={{ height: "540px" }} // Adjusted height to accommodate content better
            >
              {/* Project Image/Icon Area - Optimized for 600x400 images */}
              <div
                className={`h-64 ${project.imageBg} flex items-center justify-center overflow-hidden`}
                style={{ maxHeight: "266px" }} // Keeping 600x400 ratio
              >
                {project.image ? (
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: "center" }}
                    />
                  </div>
                ) : (
                  <div
                    className={`w-20 h-20 flex items-center justify-center rounded-full ${project.iconColor} bg-white/10`}
                  >
                    <span className="text-3xl font-serif">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-1 text-sm text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div>

        </div>

        <div className="text-center mt-12 reveal opacity-0 animate-delay-400">
          <a
            href="https://github.com/pritesh45"
            className="btn-primary bg-accent hover:bg-accent/90 text-white px-6 py-6 rounded-lg transition duration-300 w-full md:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
