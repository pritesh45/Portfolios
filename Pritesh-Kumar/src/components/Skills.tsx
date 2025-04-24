
// import { useEffect, useRef } from 'react';
// import { Code,Database, Layout, TrendingUp,Wrench,LineChart } from 'lucide-react';

// const skillCategories = [
//   {
//     title: 'Frontend Development',
//     icon: <Layout size={24} />,
//     skills: [
//       { name: 'React.js', proficiency: 85 },
//       { name: 'JavaScript', proficiency: 90 },
//       { name: 'HTML5', proficiency: 95 },
//       { name: 'CSS (Tailwind)', proficiency: 90 },
//     ],
//   },
//   {
//     title: 'Backend Development',
//     icon: <Database size={24} />,
//     skills: [
//       { name: 'Node.js', proficiency: 85 },
//       { name: 'Express.js', proficiency: 80 },
//       { name: 'JWT Authentication', proficiency: 75 },
//       { name: 'RESTful APIs', proficiency: 90 },
//     ],
//   },
//   {
//     title: 'Programming Languages',
//     icon: <Code size={24} />,
//     skills: [
//       { name: 'Java', proficiency: 90 },
//       { name: 'C++', proficiency: 85 },
//       { name: 'Python', proficiency: 80 },
//       { name: 'JavaScript', proficiency: 80 },
//       { name: 'C Programming', proficiency: 80 },
//     ],
//   },
//   {
//     title: 'Tools & Technologies',
//     icon: <Wrench size={24} />,
//     skills: [
//       { name: 'Git & GitHub', proficiency: 90 },
//       { name: 'Postman (API Testing)', proficiency: 80 },
//       { name: 'VS Code', proficiency: 92 },
//       { name: 'IntelliJ IDEA', proficiency: 80 },
//       { name: 'MS Excel', proficiency: 90 },
//     ],
//   },
//   {
//     title: 'Data & Analytics',
//     icon: <LineChart size={24} />,
//     skills: [
//       { name: 'Tableau', proficiency: 80 },
//       { name: 'MySQL', proficiency: 85 },
//       { name: 'MongoDB', proficiency: 85 },
//       { name: 'R Programming', proficiency: 90 },
//       { name: 'Hadoop', proficiency: 80 },
//     ],
//   },
//   {
//     title: 'Digital Marketing',
//     icon: <TrendingUp size={24} />,
//     skills: [
//       { name: 'Google Analytics', proficiency: 75 },
//       { name: 'Google Search Console', proficiency: 70 },
//       { name: 'Search Engine Optimization', proficiency: 80 },
//       { name: 'Google Ads', proficiency: 75 },
//       { name: 'Content Marketing', proficiency: 70 },
//     ],
//   },
// ];

// const Skills = () => {
//   const sectionRef = useRef<HTMLElement>(null);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-fade-up');
//             entry.target.classList.remove('opacity-0');
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );
    
//     const elements = sectionRef.current?.querySelectorAll('.reveal');
//     elements?.forEach((el) => observer.observe(el));
    
//     return () => {
//       elements?.forEach((el) => observer.unobserve(el));
//     };
//   }, []);
  
//   // Create a style element for keyframe animations
//   useEffect(() => {
//     // Create a style element
//     const styleEl = document.createElement('style');
    
//     // Add keyframe animations for each skill
//     let keyframes = '';
//     skillCategories.forEach(category => {
//       category.skills.forEach(skill => {
//         keyframes += `
//           @keyframes progress-${skill.proficiency} {
//             from { width: 0%; }
//             to { width: ${skill.proficiency}%; }
//           }
//         `;
//       });
//     });
    
//     styleEl.textContent = keyframes;
//     document.head.appendChild(styleEl);
    
//     // Clean up on unmount
//     return () => {
//       document.head.removeChild(styleEl);
//     };
//   }, []);
  
//   return (
//     <section 
//       id="skills" 
//       ref={sectionRef}
//       className="py-20 px-6 bg-gradient-to-b  bg-secondary/50"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <span className="text-accent text-sm font-medium tracking-wider reveal opacity-0">MY EXPERTISE</span>
//           <h2 className="section-title reveal opacity-0 mt-2">Technical Skills</h2>
//           <p className="section-subtitle reveal opacity-0 animate-delay-200">
//             A comprehensive overview of my technical abilities and proficiency across various domains.
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal opacity-0 animate-delay-300">
//           {skillCategories.map((category, index) => (
//             <div 
//               key={index} 
//               className="bg-card border border-border rounded-xl p-6 card-hover"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
//                   {category.icon}
//                 </div>
//                 <h3 className="text-lg font-semibold">{category.title}</h3>
//               </div>
              
//               <div className="space-y-4">
//                 {category.skills.map((skill, skillIndex) => (
//                   <div key={skillIndex}>
//                     <div className="flex justify-between mb-1">
//                       <span className="text-sm font-medium">{skill.name}</span>
//                       <span className="text-xs text-muted-foreground">{skill.proficiency}%</span>
//                     </div>
//                     <div className="h-2 bg-secondary rounded-full overflow-hidden">
//                       <div 
//                         className="h-full bg-accent transition-all duration-1000 ease-out"
//                         style={{ 
//                           width: '0%', 
//                           animation: `progress-${skill.proficiency} 1.5s ease-out forwards ${index * 0.1 + skillIndex * 0.1}s`
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Code, Database, Layout, TrendingUp, Wrench, LineChart } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layout size={24} />,
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS (Tailwind)'],
  },
  {
    title: 'Backend Development',
    icon: <Database size={24} />,
    skills: ['Node.js', 'Express.js', 'JWT Authentication', 'RESTful APIs'],
  },
  {
    title: 'Programming Languages',
    icon: <Code size={24} />,
    skills: ['Java', 'C++', 'Python', 'JavaScript', 'C Programming'],
  },
  {
    title: 'Tools & Technologies',
    icon: <Wrench size={24} />,
    skills: ['Git & GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA', 'MS Excel'],
  },
  {
    title: 'Data & Analytics',
    icon: <LineChart size={24} />,
    skills: ['Tableau', 'MySQL', 'MongoDB', 'R Programming', 'Hadoop'],
  },
  // {
  //   title: 'Digital Marketing',
  //   icon: <TrendingUp size={24} />,
  //   skills: ['Google Analytics', 'Google Search Console', 'SEO', 'Google Ads', 'Content Marketing'],
  // },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-background/60 to-secondary/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium tracking-wider">MY EXPERTISE</span>
          <h2 className="text-3xl font-bold mt-2">Technical Skills</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            A comprehensive overview of my technical abilities and proficiency across various domains.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {skillCategories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                  {category.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
