"use client";
import { ProjectCard } from "@/components/sections/projects/components/project_card";
import { useEffect, useRef, useState } from "react";

interface Technology {
  id: number;
  title: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
}

const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_PROJECT_IMAGE_BASE_URL;

/* interval in ms */
const SLIDE_INTERVAL = 4000;
/* number visbile projects */
const VISIBLE_PROJECTS = 2;

export function ProjectsGrid() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // window width for responsive behavior
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      console.error("API URL ist nicht definiert");
      setError("API URL ist nicht definiert.");
      return;
    }

    fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && Array.isArray(data.data.projects)) {
          setProjects(data.data.projects);
        } else {
          console.error("Projects data structure is invalid:", data);
          setProjects([]);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Projekte konnten nicht geladen werden.");
      });
  }, []);

  // dynamic visible projects based on screen size
  const getVisibleProjectsCount = () => {
    if (windowWidth < 768) return 1; 
    return VISIBLE_PROJECTS; 
  };

  // group project depens on screen size
  const projectGroups = [];
  const visibleProjects = getVisibleProjectsCount();
  for (let i = 0; i < projects.length; i += visibleProjects) {
    projectGroups.push(projects.slice(i, i + visibleProjects));
  }

  useEffect(() => {
    const startSlideShow = () => {
      intervalRef.current = setInterval(() => {
        setActiveGroupIndex(
          (prevIndex) => (prevIndex + 1) % projectGroups.length
        );
      }, SLIDE_INTERVAL);
    };

    if (!isHovered && projectGroups.length > 1) {
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
            <div className={`grid gap-8 ${visibleProjects === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
              {group.map((project, projectIndex) => (
                <ProjectCard
                  key={`${project.title}-${projectIndex}`}
                  project={{
                    title: project.title,
                    description: project.description,
                    image: `${IMAGE_BASE_URL}${project.image}`,
                    technologies: project.technologies.map((tech) => tech.title),
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* navigation buttons - big screen */}
      {isHovered && projectGroups.length > 1 && windowWidth >= 768 && (
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

      {/* navigation buttons - small screen */}
      {isHovered && projectGroups.length > 1 && windowWidth < 768 && (
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={goToPrev}
            className="bg-black/50 text-white p-3 rounded-full z-10 hover:bg-black/75 transition"
            aria-label="Zu den vorherigen Projekten zurückgehen"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            className="bg-black/50 text-white p-3 rounded-full z-10 hover:bg-black/75 transition"
            aria-label="Zu den nächste Projekten gehen"
          >
            &gt;
          </button>
        </div>
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