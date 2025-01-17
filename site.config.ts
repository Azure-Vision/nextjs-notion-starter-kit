import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'f946eed4d6d54f7c80362429d06c1a9e',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "Sophia's Homepage",
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  author: 'Sophia',

  // open graph metadata (optional)
  description: "Sophia's Homepage",

  // social usernames (optional)
  twitter: 'WanrongHe',
  github: 'Azure-Vision',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/about': '81f1445d0ea341aca8e9f3a7425e74be',
    '/contact': 'f8c6ccbae53b4177b5b01129d8a01b7e'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '81f1445d0ea341aca8e9f3a7425e74be'
    },
    {
      title: 'Contact',
      pageId: 'f8c6ccbae53b4177b5b01129d8a01b7e'
    }
  ]
})
