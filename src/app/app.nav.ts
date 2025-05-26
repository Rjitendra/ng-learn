import { INav } from '../../projects/libs/src/public-api';

export const NAVITEMS: INav[] = [
  {
    name: 'Home',
    url: '',
    icon: 'home',
  },
  {
    name: 'About',
    url: 'about',
    icon: 'info',
  },
  {
    name: 'Contact',
    url: 'contact',
    icon: 'contact_phone',
  },
  {
    name: 'Moments',
    url: 'moments',
    icon: 'photo_library',
  },
  {
    name: 'Express Builder',
    icon: 'apartment',
    url: 'express-builder',
  },
  {
    name: 'Change Detection',
    url: 'cd',
  },
  {
    name: 'Interview Questions',
    icon: 'quiz',
    url: 'interview-questions',
  },
  {
    name: 'Articles',
    icon: 'article',
    url: '',
    children: [
      {
        name: 'Angular',
        icon: '',
      },
      {
        name: 'RXJS',
        icon: '',
        url: 'article/rxjs',
      },
      {
        name: 'NGRX',
        icon: '',
      },
      {
        name: 'Angular CLI',
        icon: '',
        url: '',
      },
      {
        name: 'NX',
        icon: '',
        url: '',
      },
    ],
  }
];
