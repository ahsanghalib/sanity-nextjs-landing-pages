export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5ed352f487e8c79a2d3a820a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-a15o9x9z',
                  apiId: 'c355fc1c-807e-4430-92a0-3b9d02412492'
                },
                {
                  buildHookId: '5ed352f57ee67e5a96bfe07d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ge3m912q',
                  apiId: '2673a61f-0298-4b14-8765-88b69b02da00'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ahsanghalib/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ge3m912q.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
