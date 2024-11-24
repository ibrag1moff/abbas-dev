// software icons
import {
  FaHtml5,
  FaReact,
  FaSass,
  FaGithub,
  FaNodeJs,
  FaGulp,
  FaGitAlt,
} from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";

// services icons
import { MdDesignServices, MdLanguage } from "react-icons/md";

export const softwareSkills = [
  {
    id: 1,
    title: "html",
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    title: "css",
    icon: <FaCss3 />,
  },
  {
    id: 3,
    title: "javascript",
    icon: <SiJavascript />,
  },
  {
    id: 4,
    title: "typescript",
    icon: <SiTypescript />,
  },
  {
    id: 5,
    title: "react",
    icon: <FaReact />,
  },
  {
    id: 6,
    title: "next.js",
    icon: <RiNextjsFill />,
  },
  {
    id: 7,
    title: "tailwind",
    icon: <RiTailwindCssFill />,
  },
  {
    id: 8,
    title: "scss",
    icon: <FaSass />,
  },
  {
    id: 9,
    title: "git",
    icon: <FaGitAlt />,
  },
  {
    id: 10,
    title: "github",
    icon: <FaGithub />,
  },
  {
    id: 11,
    title: "node.js",
    icon: <FaNodeJs />,
  },
  {
    id: 12,
    title: "express.js",
    icon: <SiExpress />,
  },
  {
    id: 12,
    title: "mongodb",
    icon: <SiMongodb />,
  },
  {
    id: 13,
    title: "mysql",
    icon: <TbBrandMysql />,
  },
];

export const servicesSkills = [
  {
    id: 1,
    title: "frontend",
    icon: <FaReact />,
  },
  {
    id: 2,
    title: "backend",
    icon: <SiExpress />,
  },
  {
    id: 3,
    title: "ui/ux design",
    icon: <MdDesignServices />,
  },
];

export const languagesSkills = [
  {
    id: 1,
    title: "english",
    icon: <MdLanguage />,
  },
  {
    id: 2,
    title: "azerbaijani",
    icon: <MdLanguage />,
  },
  {
    id: 3,
    title: "russian",
    icon: <MdLanguage />,
  },
];
