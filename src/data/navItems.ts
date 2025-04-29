import { NavItem } from '../types';
import { Home, User, FileCode, Briefcase, Mail, Coffee } from 'lucide-react';

export const navItems: NavItem[] = [
  {
    label: 'Home',
    path: '/',
    icon: Home,
  },
  {
    label: 'About',
    path: '/about',
    icon: User,
  },
  {
    label: 'Skills',
    path: '/skills',
    icon: FileCode,
  },
  {
    label: 'Projects',
    path: '/projects',
    icon: Briefcase,
  },
  {
    label: 'Contact',
    path: '/contact',
    icon: Mail,
  },
  {
    label: 'Hobbies',
    path: '/hobbies',
    icon: Coffee,
  },
];