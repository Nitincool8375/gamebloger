import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'My Games',
    path: '/mygames',
    icon: <Icon icon="lucide:gamepad" width="24" height="24" />,
    // submenu: true,
    // subMenuItems: [
    //   { title: 'All', path: '/projects' },
    //   { title: 'Web Design', path: '/projects/web-design' },
    //   { title: 'Graphic Design', path: '/projects/graphic-design' },
    // ],
  },
  {
    title: 'About me',
    path: '/about',
    icon: <Icon icon="lucide:user" width="24" height="24" />,
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: <Icon icon="lucide:book-open" width="24" height="24" />,
  },
];
