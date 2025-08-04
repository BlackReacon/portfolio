import { ReactNode } from "react";

interface SkillCardProps {
  skill: {
    icon: ReactNode;
    title: string;
    description: string;
  };
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="relative bg-gray-800/50 p-6 border border-purple-400/20 rounded-lg text-center group hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">

      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg" />

      <div className="relative w-16 h-16 mx-auto mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-purple-500 to-purple-600 rounded-full p-0.5 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-purple-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-30 blur-sm transition-all duration-700" />
        </div>
        <div className="grayscale group-hover:grayscale-0 relative w-full h-full bg-gray-900 rounded-full flex items-center justify-center text-2xl font-bold text-white border border-purple-400/20 group-hover:border-purple-400/40 transition-all duration-300">
          {skill.icon}
        </div>
      </div>
      <h3 className="text-xl font-bold uppercase tracking-wider mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
        {skill.title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        {skill.description}
      </p>
    </div>
  );
}
