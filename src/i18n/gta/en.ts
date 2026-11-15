// English copy of the GTA release variant, served at /en/.

import { bike, site } from '../../data/site';
import type { GtaDictionary } from './types';

const claim: [string, string] = ['Low latency.', 'High torque.'];
const price = 'CHF 6.10';

export default {
  lang: 'en',
  ogLocale: 'en_GB',
  language: { name: 'English', version: 'English version' },

  meta: {
    title: `${site.name} – ${claim.join(' ')}`,
    description:
      'Silas Knobel, software architect and DevOps engineer from Thurgau, Switzerland. Cloud platforms, pipelines, operations – and a motorcycle on weekends.',
  },

  ui: {
    skipLink: 'Skip to content',
    home: `${site.name}, back to top`,
    mainNav: 'Main',
  },

  nav: {
    sections: [
      { href: '#now', label: 'now' },
      { href: '#stack', label: 'stack' },
      { href: '#log', label: 'runlog' },
      { href: '#source', label: 'source' },
      { href: '#print', label: 'product' },
      { href: '#ride', label: 'ride' },
    ],
    contact: { href: '#contact', label: 'get in touch' },
  },

  hud: {
    cash: price,
    cashLabel: `ZenifyPrint from ${price}`,
    cheatCash: 'CHF 999,999.10',
    wanted: {
      calm: 'Wanted level zero: all systems nominal',
      hot: 'Wanted level five',
    },
  },

  help: {
    headline: 'Thursday, 19 November, is release day.',
    remaining: '{days}, {time} to go.',
    day: '1 day',
    days: '{n} days',
    todayHeadline: 'Today is release day.',
    today: 'Have fun out there.',
    close: 'Close notice',
  },

  hero: {
    label: 'Intro',
    claim,
    lede: 'Software architect and DevOps engineer from Thurgau, Switzerland. By day I design cloud platforms; on weekends I ride my motorcycle.',
    actions: { contact: 'Get in touch', missions: 'View current missions' },
    tipLabel: 'Tip',
    tips: [
      'Small, frequent releases ride like smooth inputs on the throttle.',
      'A check before every ride. Before every deploy, too.',
      'PDFs you send with ZenifyPrint are deleted after 30 days.',
      'In the tool wheel, the arrow keys switch between the layers.',
      'One word from the claim works as a cheat on this page.',
    ],
    nextTip: 'Next tip',
    loading: 'Loading Thurgau',
    loaded: 'Loaded',
  },

  cheat: {
    word: 'torque',
    toastTitle: 'Cheat activated:',
    toastText: 'full torque.',
  },

  missions: {
    title: 'Current missions',
    lede: "What's running right now: in operations, at my own company and on GitHub on the side.",
    cards: [
      {
        title: 'Head of Operations',
        org: 'Software Brauerei AG',
        body: 'Responsible for operations since 2023. Before that, eight years as Senior Software Engineer in the same house.',
      },
      {
        title: 'Founder of Zenify',
        org: 'Since 2026',
        body: 'The accounting back office for sole traders in Switzerland.',
        link: { href: site.links.zenify, label: 'Visit zenify.ch' },
      },
      {
        title: 'Open source',
        org: 'On the side',
        body: 'Tools for AWS and home automation, freely available.',
        link: { href: site.links.github, label: 'View projects on GitHub' },
      },
    ],
  },

  stack: {
    title: 'Tool wheel',
    lede: 'Five layers, one stack. Pick a layer to see the tools in it.',
    hint: {
      before: 'Use',
      between: 'and',
      after: 'to switch between the layers.',
      left: 'Left arrow',
      right: 'Right arrow',
    },
    layers: [
      { name: 'Platform', tools: ['AWS', 'Kubernetes', 'OpenShift', 'Serverless'] },
      { name: 'Infrastructure', tools: ['Terraform', 'Docker', 'Node', 'Bun'] },
      { name: 'Architecture', tools: ['Microservices', 'APIs', 'Queues'] },
      { name: 'Data', tools: ['SQL', 'MongoDB', 'Redis'] },
      { name: 'Code', tools: ['Java', 'TypeScript / JavaScript', 'Python', 'Bash'] },
    ],
  },

  runlog: {
    title: 'Runlog',
    lede: '23 years in the game, no game over. Every mission since my apprenticeship, from the first line of code to my own company.',
    entries: [
      { years: '2003–2007', role: 'IT apprenticeship', org: 'Bühler Group', state: 'passed' },
      { years: '2007–2011', role: 'Senior SAP NetWeaver Consultant', org: 'Resource AG', state: 'passed' },
      { years: '2011–2014', role: 'Senior Software Engineer', org: 'Swisscom', state: 'passed' },
      { years: '2014–2022', role: 'Senior Software Engineer', org: 'Software Brauerei AG', state: 'passed' },
      { years: '2023–now', role: 'Head of Operations', org: 'Software Brauerei AG', state: 'running', live: true },
      { years: '2026', role: 'Founding', org: 'Zenify', state: 'running', live: true },
    ],
  },

  source: {
    title: 'Source',
    lede: 'Open jobs on GitHub: tools that grew out of day-to-day operations.',
    open: 'Open repository',
    repos: [
      {
        kind: 'Terraform / HCL',
        name: 'aws-to-tempo-cost-exporter',
        facts: [
          { term: 'Goal', value: 'Exports AWS costs per account into Tempo Financial Manager.' },
          { term: 'How', value: 'On a schedule, with EventBridge Scheduler and Lambda.' },
        ],
      },
      {
        kind: 'JavaScript',
        name: 'aws-step-functions-s3-payload',
        facts: [{ term: 'Goal', value: 'Reads and saves payloads in AWS Step Functions via S3.' }],
      },
    ],
    bonus: {
      kind: 'Bonus job, archived',
      name: 'gta-v-cheat-sheets',
      body: 'A collection of cheats, just in time for Thursday. This page knows one too: type the last word of the claim.',
    },
  },

  product: {
    title: 'ZenifyPrint',
    lede: 'Upload a PDF, done. The document is printed in colour, put in an envelope and posted within Switzerland.',
    from: 'from',
    price,
    note: 'printing, envelope and postage included',
    link: 'Upload a PDF to ZenifyPrint',
    map: {
      title: 'How ZenifyPrint works: 1 upload, 2 print, 3 envelope, 4 post, 5 deleted after 30 days',
      stops: ['Upload', 'Print', 'Envelope', 'Post', 'deleted after 30 days'],
    },
    objective: { before: 'Take the PDF to the ', target: 'post office', after: '.' },
  },

  ride: {
    title: 'Ride',
    lede: `The garage has one parking space. On two wheels since ${bike.ridingSince}, preferably through the ${bike.homeRoads}.`,
    photo: {
      alt: `Silas on his ${bike.model} at sunset, painted in the style of an open-world game: palm trees, the sea, a skyline and a helicopter in the sky.`,
      zone: 'Passo dello Stelvio',
      altitude: '2757 m a.s.l.',
    },
    stats: {
      maker: 'Harley-Davidson',
      model: bike.model,
      bars: ['Torque', 'Latency'],
      specs: [
        { term: 'Engine', value: bike.engine },
        { term: 'Riding', value: `since ${bike.ridingSince}` },
        { term: 'Fav road', value: bike.homeRoads },
      ],
    },
    lessonsTitle: 'What operations can learn from a motorcycle',
    lessons: [
      {
        title: 'A check before every ride',
        body: 'Tires, lights, brakes. The same goes for every deploy: checklist first, then hit the road.',
      },
      {
        title: 'Smooth inputs',
        body: 'Fluid, not jerky. Small, frequent releases keep the system calmly on track.',
      },
      {
        title: 'Listen for warning signs',
        body: 'The machine speaks up before something breaks. If you listen, you rarely need a tow.',
      },
    ],
  },

  contact: {
    title: 'New mission?',
    lede: "Architecture reviews, cloud platforms, pipelines and operations. Get in touch on one of these channels and we'll talk the job through.",
    app: 'Contacts',
    hint: 'Tap a contact to start the mission.',
  },

  footer: {
    motto: 'Dad. Maker. Problem solver.',
    status: 'all systems nominal',
    note: 'An unofficial tribute for release Thursday. Not affiliated with Rockstar Games or Take-Two Interactive.',
  },

  minimap: { uptime: 'Uptime', coffee: 'Coffee' },

  banner: { title: 'Page completed', text: '100% of katun.ch explored' },
} satisfies GtaDictionary;
