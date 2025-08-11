"use client";
import { ProjectCard } from "@/components/sections/projects/components/project_card";
import { useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    title: "E-COMMERCE NEXUS",
    description:
      "Vollständige E-Commerce-Platform mit React, Node.js und MariaDB.",
    tags: ["React", "Node.js", "MariaDB"],
  },
  {
    title: "PRODUCTIVITY MATRIX",
    description:
      "High-Performance Task Management mit Real-time Collaboration.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "DATA VISUALIZER",
    description: "Datenvisualisierungstool mit D3.js und React.",
    tags: ["D3.js", "React", "TypeScript"],
  },
  {
    title: "AI CHATBOT",
    description: "Konversations-KI mit Natural Language Processing.",
    tags: ["Python", "TensorFlow", "NLTK"],
  },
  {
    title: "E-COMMERCE NEXUS",
    description:
      "Vollständige E-Commerce-Platform mit React, Node.js und MariaDB.",
    tags: ["React", "Node.js", "MariaDB"],
  },
  {
    title: "PRODUCTIVITY MATRIX",
    description:
      "High-Performance Task Management mit Real-time Collaboration.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "DATA VISUALIZER",
    description: "Datenvisualisierungstool mit D3.js und React.",
    tags: ["D3.js", "React", "TypeScript"],
  },
  {
    title: "AI CHATBOT",
    description: "Konversations-KI mit Natural Language Processing.",
    tags: ["Python", "TensorFlow", "NLTK"],
  },
  /* With Image and URL
  { 
    title: 'E-COMMERCE NEXUS', 
    description: 'Vollständige E-Commerce-Platform mit React, Node.js und MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/images/projects/ecommerce.jpg', 
    projectUrl: 'https://ecommerce-beispiel.de' 
  }, */
];

/* interval in ms */
const SLIDE_INTERVAL = 4000;
/* number visbile projects */
const VISIBLE_PROJECTS = 2;

export function ProjectsGrid() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // groups of projects based on VISIBLE_PROJECTS
  const projectGroups = [];
  for (let i = 0; i < PROJECTS.length; i += VISIBLE_PROJECTS) {
    projectGroups.push(PROJECTS.slice(i, i + VISIBLE_PROJECTS));
  }

  useEffect(() => {
    const startSlideShow = () => {
      intervalRef.current = setInterval(() => {
        setActiveGroupIndex(
          (prevIndex) => (prevIndex + 1) % projectGroups.length
        );
      }, SLIDE_INTERVAL);
    };

    if (!isHovered) {
      startSlideShow();
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, projectGroups.length]);

  /* next project */
  const goToNext = () => {
    setActiveGroupIndex((prevIndex) => (prevIndex + 1) % projectGroups.length);
  };
  /* previos project */
  const goToPrev = () => {
    setActiveGroupIndex((prevIndex) =>
      prevIndex === 0 ? projectGroups.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* slides container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeGroupIndex * 100}%)` }}
      >
        {projectGroups.map((group, groupIndex) => (
          <div key={`group-${groupIndex}`} className="w-full flex-shrink-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {group.map((project, projectIndex) => (
                <ProjectCard
                  key={`${project.title}-${projectIndex}`}
                  project={project}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* navigation buttons */}
      {isHovered && projectGroups.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/75 transition"
            aria-label="Zu den vorherigen Projekten zurückgehen"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/75 transition"
            aria-label="Zu den nächste Projekten gehen"
          >
            &gt;
          </button>
        </>
      )}

      {/* indicators */}
      {projectGroups.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {projectGroups.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveGroupIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === activeGroupIndex ? "bg-purple-500" : "bg-gray-300"
              }`}
              aria-label={`Gehe zu den nächsten Projekten ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
