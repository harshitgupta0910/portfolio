import { SidebarItem } from '../types';

export const sidebarItems: SidebarItem[] = [
  {
    name: 'About',
    path: '/about',
    type: 'folder',
    expanded: true,
    children: [
      {
        name: 'index.html',
        path: '/about',
        type: 'file',
        extension: 'html'
      },
      {
        name: 'experience.css',
        path: '/about/experience',
        type: 'file',
        extension: 'css'
      }
    ]
  },
  {
    name: 'Skills',
    path: '/skills',
    type: 'folder',
    expanded: true,
    children: [
      {
        name: 'skills.js',
        path: '/skills',
        type: 'file',
        extension: 'js'
      }
    ]
  },
  {
    name: 'Projects',
    path: '/projects',
    type: 'folder',
    expanded: true,
    children: [
      {
        name: 'projects.ts',
        path: '/projects',
        type: 'file',
        extension: 'ts'
      }
    ]
  },
  {
    name: 'Side Projects',
    path: '/side-projects',
    type: 'folder',
    expanded: true,
    children: [
      {
        name: 'AyeSoul.js',
        path: '/side-projects/ayesoul',
        type: 'file',
        extension: 'js'
      },
      {
        name: 'AyeHigh.js',
        path: '/side-projects/ayehigh',
        type: 'file',
        extension: 'js'
      },
      {
        name: 'Ninetails.ts',
        path: '/side-projects/ninetails',
        type: 'file',
        extension: 'ts'
      },
      {
        name: 'AyeDot.js',
        path: '/side-projects/ayedot',
        type: 'file',
        extension: 'js'
      },
      {
        name: 'Ayefan.js',
        path: '/side-projects/ayefan',
        type: 'file',
        extension: 'js'
      },
      {
        name: 'Onwos.ts',
        path: '/side-projects/onwos',
        type: 'file',
        extension: 'ts'
      },
      {
        name: 'fireflow.js',
        path: '/side-projects/fireflow',
        type: 'file',
        extension: 'js'
      },
      {
        name: 'Shortlit.js',
        path: '/side-projects/shortlit',
        type: 'file',
        extension: 'js'
      }
    ]
  },
  {
    name: 'Contact',
    path: '/contact',
    type: 'folder',
    expanded: true,
    children: [
      {
        name: 'Email.tsx',
        path: '/contact',
        type: 'file',
        extension: 'tsx'
      }
    ]
  },
  {
    name: 'Misc',
    path: '/misc',
    type: 'folder',
    expanded: true,
    children: [
      {
        name: 'Blogs.py',
        path: '/misc/blogs',
        type: 'file',
        extension: 'py'
      },
      {
        name: 'Gaming.sln',
        path: '/misc/gaming',
        type: 'file',
        extension: 'sln'
      },
      {
        name: 'Anime.jsx',
        path: '/misc/anime',
        type: 'file',
        extension: 'jsx'
      }
    ]
  }
];