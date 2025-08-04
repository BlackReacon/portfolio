import { SkillCard } from '@/components/sections/skills/components/skill_card';
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiDocker, SiMariadb } from 'react-icons/si';

const SKILLS = [
    { 
      icon: <FaHtml5 className="text-orange-500" size={24} />, 
      title: 'HTML5', 
      description: 'Semantisches Markup und progressive Web-Standards' 
    },
    { 
      icon: <FaCss3Alt className="text-blue-500" size={24} />, 
      title: 'CSS3', 
      description: 'Advanced Styling, Animations und responsive Design' 
    },
    { 
      icon: <FaJs className="text-yellow-400" size={24} />, 
      title: 'JavaScript', 
      description: 'ES6+, Performance-Optimierung und moderne Patterns' 
    },
    { 
      icon: <SiTypescript className="text-blue-400" size={24} />, 
      title: 'TypeScript', 
      description: 'Type-Checking zur Kompilierungszeit für robustere Anwendungen' 
    },
    { 
      icon: <SiNextdotjs className="text-white" size={24} />, 
      title: 'Next.js', 
      description: 'Server-Side Rendering, Static Site Generation und optimierte Performance' 
    },
    { 
      icon: <SiDocker className="text-blue-400" size={24} />, 
      title: 'Docker', 
      description: 'Containerisierung' 
    },
    { 
      icon: <SiMariadb className="text-red-400" size={24} />, 
      title: 'mariaDB', 
      description: 'Open-Source relationale Datenbank mit hoher Kompatibilität zu MySQL' 
    },
    { 
      icon: <FaGitAlt className="text-orange-600" size={24} />, 
      title: 'Git', 
      description: 'Versionskontrolle, Branch-Strategien und kollaborative Entwicklungsworkflows' 
    }
  ];

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {SKILLS.map((skill) => (
        <SkillCard key={skill.title} skill={skill} />
      ))}
    </div>
  );
}