import React from "react";
import {
  Braces,
  Database,
  Code2,
  Cloud,
  Server,
  BadgeHelp,
  FileCode,
  Flame,
  GitBranch,
  Leaf,
  SatelliteDish,
  Ship,
  CircleDot,
  Triangle,
  DatabaseZap,
} from "lucide-react";

const tecnologiaIcons = {
  JavaScript: <FileCode title="JavaScript" className="w-5 h-5 text-yellow-400" />,
  TypeScript: <FileCode title="TypeScript" className="w-5 h-5 text-blue-400" />,
  HTML: <FileCode title="HTML" className="w-5 h-5 text-orange-500" />,
  CSS: <FileCode title="CSS" className="w-5 h-5 text-blue-700" />,
  React: <Braces title="React" className="w-5 h-5 text-cyan-400" />,
  NextJS: <CircleDot title="Next.js" className="w-5 h-5 text-white" />,
  Angular: <Triangle title="Angular" className="w-5 h-5 text-red-500" />,
  Node: <Server title="Node.js" className="w-5 h-5 text-green-600" />,
  "Node.js": <Server title="Node.js" className="w-5 h-5 text-green-600" />,
  Express: <Code2 title="Express" className="w-5 h-5 text-neutral-400" />,
  Tailwind: <Cloud title="Tailwind" className="w-5 h-5 text-sky-400" />,
  MongoDB: <Leaf title="MongoDB" className="w-5 h-5 text-green-500" />,
  PostgreSQL: <Database title="PostgreSQL" className="w-5 h-5 text-blue-500" />,
  Prisma: <DatabaseZap title="Prisma" className="w-5 h-5 text-indigo-400" />,
  Firebase: <Flame title="Firebase" className="w-5 h-5 text-yellow-500" />,
  Docker: <Ship title="Docker" className="w-5 h-5 text-blue-300" />,
  Git: <GitBranch title="Git" className="w-5 h-5 text-orange-400" />,
  Apollo: <SatelliteDish title="Apollo GraphQL" className="w-5 h-5 text-violet-400" />,
  "TMDB API": <BadgeHelp title="TMDB API" className="w-5 h-5 text-pink-400" />,
  Zustand: <Code2 title="Zustand" className="w-5 h-5 text-yellow-400" />,
  Chartjs: <Code2 title="Chart.js" className="w-5 h-5 text-pink-400" />,
};

export default tecnologiaIcons;
