import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/test-docs/markdown-page',
    component: ComponentCreator('/test-docs/markdown-page', 'ed8'),
    exact: true
  },
  {
    path: '/test-docs/docs',
    component: ComponentCreator('/test-docs/docs', 'f48'),
    routes: [
      {
        path: '/test-docs/docs',
        component: ComponentCreator('/test-docs/docs', '503'),
        routes: [
          {
            path: '/test-docs/docs',
            component: ComponentCreator('/test-docs/docs', '088'),
            routes: [
              {
                path: '/test-docs/docs/Getting-Started/installation',
                component: ComponentCreator('/test-docs/docs/Getting-Started/installation', '740'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test-docs/docs/Getting-Started/intro',
                component: ComponentCreator('/test-docs/docs/Getting-Started/intro', '3c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test-docs/docs/Getting-Started/setup',
                component: ComponentCreator('/test-docs/docs/Getting-Started/setup', '64e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test-docs/docs/Guides/advance-usage',
                component: ComponentCreator('/test-docs/docs/Guides/advance-usage', 'e91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test-docs/docs/Guides/how-to-use',
                component: ComponentCreator('/test-docs/docs/Guides/how-to-use', 'fe9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test-docs/docs/Implementation/configuration',
                component: ComponentCreator('/test-docs/docs/Implementation/configuration', '2b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test-docs/docs/Implementation/deployment',
                component: ComponentCreator('/test-docs/docs/Implementation/deployment', 'b85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test-docs/docs/Implementation/overview',
                component: ComponentCreator('/test-docs/docs/Implementation/overview', '9a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/test-docs/',
    component: ComponentCreator('/test-docs/', '594'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
