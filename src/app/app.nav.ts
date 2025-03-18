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
    name: 'Express Builder',
    icon: 'apartment',
    url: 'express-builder',
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
        children: [
          {
            name: 'Forms',
            icon: '',

            children: [
              {
                name: 'Template Driven',
                url: 'articles/form/template-driven',
                icon: '',
              },
              {
                name: 'Reactive',
                url: 'articles/form/reactive',
                icon: '',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Articles',
    icon: 'article',
    url: '',
    children: [
      {
        name: 'Angular',
        icon: '',
        children: [
          {
            name: 'Forms',
            icon: '',

            children: [
              {
                name: 'Template Driven',
                url: 'articles/form/template-driven',
                icon: '',
              },
              {
                name: 'Reactive',
                url: 'articles/form/reactive',
                icon: '',
              },
            ],
          },
        ],
      },
    ],
  },
];
