// This file handles all profiles that the website hosts

import { languageProficiency, proficiency, profile } from '~/types/CV';

/* TODO later on i want to build an editor for others to fill in their data,
 *  which exports them a correct json
 */

const sebastian: profile = {
  person: {
    name: { first: 'Sebastian', last: 'Di Luzio' },
    profession: 'Fullstack Developer, Games Engineer. CTO @ flint.gg',
    // image: '',
    services: {
      linkedin: 'sebastian-di-luzio-357185171',
      // change to https://www.linkedin.com/in/sebastian-di-luzio-357185171/ in FE
      github: 't0tproduction', // change to URL in FE
    },
    email: 'sebastian@diluz.io',
    website: 'https://diluz.io',
    shortText:
      "Im the creator of this website. If you're a Di Luzio yourself, reach out and we can set up your own page here as well!",
    /* interests: [
      { title: 'Gaming', icon: 'gamepad-square' },
      { title: 'Monster Hunting', icon: 'sword-cross' },
      { title: 'Fullstack Development', icon: 'code-braces' },
    ], */
    languages: [
      { lang: 'German', proficiency: languageProficiency.native },
      { lang: 'English', proficiency: languageProficiency.native },
      // these are not true, only for testing:
      /* { lang: 'Japanese', proficiency: languageProficiency.A1 },
      { lang: 'Latin', proficiency: languageProficiency.B1 }, */
    ],
    nationalities: [{ title: 'German' }, { title: 'US-American' }],
  },
  skills: {
    technical: [
      { title: 'TypeScript', proficiency: proficiency.strong },
      { title: 'JavaScript', proficiency: proficiency.strong },
      { title: 'Java', proficiency: proficiency.knowledgeable },
      { title: 'SQL', proficiency: proficiency.strong },
      { title: 'MongoDB', proficiency: proficiency.knowledgeable },
      { title: 'C', proficiency: proficiency.knowledgeable },
      { title: 'C#', proficiency: proficiency.knowledgeable },
      { title: 'C++', proficiency: proficiency.knowledgeable },
      { title: 'Unity', proficiency: proficiency.knowledgeable },
      { title: 'Unreal', proficiency: proficiency.knowledgeable },
    ],
    education: [
      {
        title: 'Bachelor of Science: Games Engineering',
        source: 'Technical University Munich',
        date: new Date('08/2019'),
        link: 'https://tum.de',
      },
    ],
    certificates: [{ title: 'Official Basti', link: 'https:google.com/basti' }],
    misc: [
      { title: 'Adobe After Effects' },
      { title: 'Adobe Premiere Pro' },
      { title: 'Community Management' },
    ],
  },
  projects: [
    {
      title: 'diluz.io',
      role: 'Developer and maintainer',
      timeframe: {
        start: new Date(2021, 4),
        end: 'current',
      },
      url: 'https://github.com/T0TProduction/diluz.io',
      technologies: ['TypeScript', 'Nuxt.js', 'Vue.js', 'SCSS'],
      description:
        'My personal website as well as a collection of CVs for all Di Luzios.',
    },
    {
      title: 'Magibot',
      role: 'Developer and maintainer',
      url: 'https://bots.ondiscord.xyz/bots/384820232583249921',
      timeframe: {
        start: new Date(2017, 7),
        end: 'current',
      },
      technologies: ['TypeScript', 'Node.js', 'Discord API', 'MongoDB'],

      description:
        'Magibot is a Discord bot that helps voice-chat focused servers build communities. It is currently in over 1200 guilds serving 350.000+ users.',
    },
  ],
};

export const profiles: Map<string, profile> = new Map([
  ['sebastian', sebastian],
]);
