"use client";
import { SkillCard } from "@/components/sections/skills/components/skill_card";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fetchSkills, Skill } from "@/lib/api/apiSkills";

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
    fetchSkills()
      .then((data) => setSkills(data))
      .catch((err) => {
        console.error(err);
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
              icon: (
                <img
                  src={`${ICON_BASE_URL}${skill.icon}`}
                  alt={skill.title}
                  className="w-6 h-6"
                />
              ),
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
