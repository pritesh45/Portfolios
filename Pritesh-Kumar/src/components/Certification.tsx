import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import image2 from "../assets/nptel.jpg";
import Bank from "../assets/mongo.png";

import work1 from "../assets/work-1.png";
import Ipl from "../assets/ai.jpeg";
import Password from "../assets/password.png";
import currency from "../assets/currency.png";
const projects = [
  {
    title: "Software Testing",
    description:
      "In a software testing course, I’ll learn manual and automated testing, test case design, bug reporting, test tools like Selenium and JIRA, API testing, database validation, Agile methodology, and real-world project testing skills.",
    tags: ["MManual Testing", "Automation Testing", "API Testing"],
    demoUrl: "https://drive.google.com/file/d/1_MOh6EHbbRDDc9yHvnFNnKlqvE1Zso1D/view?usp=sharing",
   // githubUrl: "https://github.com/Navneetsingh04/Food-Delivery-Website",
    imageBg: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-500",
    image: image2,
  },
  {
    title: "Introduction to MongoDB (For Students)",
    description:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents instead of tables. It’s great for handling large, unstructured data and is commonly used in modern web apps.",
    tags: ["CRUD", "NOSQL"],
    // demoUrl: "#",
   // githubUrl: "https://github.com/Navneetsingh04/Banking-System",
    imageBg: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-500",
    image: Bank,
  },
  {
    title: "Introduction to Generative AI",
    description:
      "Generative AI is a type of artificial intelligence that can create new content such as text, images, audio, code, or video based on what it has learned from existing data.",
    tags: ["AI", "ML", "Deep Learning"],
    demoUrl:
      "https://www.coursera.org/account/accomplishments/verify/4HMDHF4CGVBV",
    // githubUrl:
    //   "https://github.com/Navneetsingh04/Tableau-Dashboards",
    imageBg: "bg-green-50 dark:bg-green-900/20",
    iconColor: "text-green-500",
    image: Ipl,
  },
  // {
  //   title: "Snake Game Web App",
  //   description:
  //     "This classic Snake Game is built using HTML, CSS, and JavaScript, offering smooth gameplay and an interactive experience.",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   demoUrl: "https://navneetsingh04.github.io/Snake-Game/",
  //   githubUrl: "https://github.com/Navneetsingh04/Snake-Game",
  //   imageBg: "bg-red-50 dark:bg-red-900/20",
  //   iconColor: "text-red-500",
  //   image: work1,
  // },
  // Add more projects here as needed
  // {
  //   title: "Password Generator",
  //   description:
  //     "A modern, user-friendly password generator built with React and Tailwind CSS.it allows users to generate secure, random passwords based on their chosen criteria.",
  //   tags: ["React", "Tailwind CSS", "Web Development"],
  //   demoUrl: "https://navneetsingh04.github.io/Password-Generator/",
  //   githubUrl: "https://github.com/Navneetsingh04/Password-Generator",
  //   imageBg: "bg-yellow-50 dark:bg-yellow-900/20",
  //   iconColor: "text-yellow-500",
  //   image: Password,
  // },
  // {
  //   title: "Currency Converter",
  //   description:
  //     "A currency converter web application built with React.js and Tailwind CSS, featuring real-time exchange rates and a user-friendly interface.",
  //   tags: ["React", "Tailwind CSS", "API Integration"],
  //   demoUrl: "https://navneetsingh04.github.io/Currency-Converter/",
  //   githubUrl: "https://github.com/Navneetsingh04/Currency-Converter",
  //   imageBg: "bg-indigo-50 dark:bg-indigo-900/20",
  //   iconColor: "text-indigo-500",
  //   image: currency,
  // },
];

const Certification = () => {
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
        <span className="text-accent text-sm font-medium tracking-wider reveal opacity-0"></span>
          <h2 className="section-title reveal opacity-0 mt-2">
          Certification
          </h2>
          <p className="section-subtitle reveal opacity-0 animate-delay-200">
          I believe in continuous learning and upskilling to stay ahead in the tech world. These certifications reflect my dedication to expanding my knowledge and expertise across various domains in technology and analytics.
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
                    //href={project.githubUrl}
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
          {/* <a
            href="https://github.com/pritesh45"
            className="btn-primary bg-accent hover:bg-accent/90 text-white px-6 py-6 rounded-lg transition duration-300 w-full md:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Certification;
