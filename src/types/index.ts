export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'devops' | 'other';
}

export interface NavItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

export interface SidebarFile {
  name: string;
  path: string;
  icon?: string;
  type: 'file';
  extension?: string;
}

export interface SidebarFolder {
  name: string;
  path: string;
  icon?: string;
  type: 'folder';
  expanded?: boolean;
  children: (SidebarFile | SidebarFolder)[];
}

export type SidebarItem = SidebarFile | SidebarFolder;