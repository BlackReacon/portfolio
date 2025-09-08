"use client";
import { SkillCard } from "@/components/sections/skills/components/skill_card";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const ICON_BASE_URL = process.env.NEXT_PUBLIC_ICON_BASE_URL;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

export function SkillsGrid() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -100px 0px",
  });

  const [skills, setSkills] = useState<Skill[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      console.error("API URL ist nicht definiert");
      setError("API URL ist nicht definiert.");
      return;
    }

    console.log("Fetching from:", apiUrl);

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
      .then((response) => {
        console.log("Received data:", response);
        if (response.success && Array.isArray(response.data.skills)) {
          setSkills(response.data.skills);
        } else {
          console.error("Skills data is not an array:", response);
          setSkills([]);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Skills konnten nicht geladen werden.");
      });
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    } else {
      controls.start("exit");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {skills.map((skill) => (
        <motion.div key={skill.title} variants={itemVariants}>
          <SkillCard
            skill={{
              title: skill.title,
              description: skill.description,
              icon: `${ICON_BASE_URL}${skill.icon}`,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
