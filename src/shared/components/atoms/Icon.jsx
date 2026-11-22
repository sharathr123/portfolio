import React from 'react';
import {
  Smartphone,
  Layers,
  Puzzle,
  Wrench,
  ExternalLink,
  Mail,
  FileText,
  ChevronRight,
  ArrowRight,
  Code2,
  CheckCircle2,
  Cpu,
  Server,
  Cloud,
  Terminal,
  RefreshCw,
  GitBranch,
} from 'lucide-react';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNodedotjs,
  SiFirebase,
  SiGitlab,
  SiGithub,
  SiPostman,
  SiAndroid,
  SiApple,
  SiSocketdotio,
} from 'react-icons/si';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';

const BRAND_ICONS = {
  react: SiReact,
  reactnative: SiReact,
  javascript: SiJavascript,
  typescript: SiTypescript,
  redux: SiRedux,
  nodejs: SiNodedotjs,
  firebase: SiFirebase,
  gitlab: SiGitlab,
  github: FaGithub,
  postman: SiPostman,
  android: SiAndroid,
  apple: SiApple,
  ios: SiApple,
  socketio: SiSocketdotio,
  mobile: Smartphone,
  layers: Layers,
  puzzle: Puzzle,
  tools: Wrench,
  code: Code2,
  check: CheckCircle2,
  cpu: Cpu,
  server: Server,
  cloud: Cloud,
  terminal: Terminal,
  refresh: RefreshCw,
  git: GitBranch,
  external: ExternalLink,
  arrowRight: ArrowRight,
  chevronRight: ChevronRight,
  linkedin: FaLinkedin,
  mail: Mail,
  resume: FileText,
};

export function Icon({ name, className = 'w-5 h-5', ...props }) {
  const normalizedKey = (name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const IconComponent = BRAND_ICONS[normalizedKey] || Code2;
  return <IconComponent className={className} {...props} />;
}

export default Icon;
