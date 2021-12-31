module.exports = {
  siteTitle: 'Sibi Vishtan | Software Engineer',
  siteDescription:
    'Sibi is a Software Engineer and Data Analyst, who loves learning new things',
  siteKeywords:
    'sibi, vishtan, sibi vishtan tt, vis7tan, data analyst',
  siteUrl: 'https://vishtan.tech',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Sibi Vishtan TT',
  location: 'Madurai, India',
  email: 'sibivishtantt@gmail.com',
  github: 'https://github.com/urstrulyvishtan',
  twitterHandle: '@iam_vishtan',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/urstrulyvishtan',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sibi-vishtan-421151184/',
    },
  
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/vis7tan/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/iam_vishtan',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Certifications',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
