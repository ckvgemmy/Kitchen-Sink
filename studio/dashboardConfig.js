export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62f9e75932fff403b5e51502',
                  title: 'Sanity Studio',
                  name: 'kitchen-sink-studio-w342xikr',
                  apiId: 'f1528f9a-4037-4200-ba28-06e7908177a2'
                },
                {
                  buildHookId: '62f9e7596822610b7e88c471',
                  title: 'Blog Website',
                  name: 'kitchen-sink-web',
                  apiId: '0187deb8-db48-4246-aee4-c7ff3af11d61'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ckvgemmy/Kitchen-Sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kitchen-sink-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
