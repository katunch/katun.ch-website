// English copy, served at /en/.

import { bike, site } from '../data/site';
import type { Dictionary } from './types';

const motto = 'Dad. Maker. Problem solver.';

export default {
  lang: 'en',
  ogLocale: 'en_GB',
  language: { code: 'EN', name: 'English' },
  motto,

  meta: {
    title: 'Silas Knobel — Software Architect, DevOps Engineer, Rider',
    description:
      'Silas Knobel is a software architect and DevOps engineer from Thurgau, Switzerland. He designs cloud platforms that stay quiet at 3 a.m. — and rides a Harley on weekends.',
    byline: 'Silas Knobel — Software Architect & DevOps Engineer',
  },

  ui: {
    skipLink: 'Skip to content',
    mainNav: 'Main',
    backToTop: 'back to top',
    home: 'homepage',
    contact: 'get in touch',
    themeLight: 'Switch to light theme',
    themeDark: 'Switch to dark theme',
    terminal: 'Profile files',
    star: 'star',
    stars: 'stars',
    archived: 'archived',
  },

  nav: [
    { href: '#now', label: 'now' },
    { href: '#stack', label: 'stack' },
    { href: '#log', label: 'runlog' },
    { href: '#source', label: 'source' },
    { href: '#print', label: 'product' },
    { href: '#ride', label: 'ride' },
  ],

  hero: {
    title: ['Low latency.', 'High torque.'],
    lead: "I'm {name} — software architect and DevOps engineer from Thurgau, Switzerland. By day I design cloud platforms that stay quiet at 3 a.m. On weekends I'm on my Harley, somewhere out of signal range.",
    actions: { runlog: 'view runlog →', ride: 'meet the machine' },
    roles: ['Head of Operations @ Software Brauerei AG', 'Founder @ Zenify'],
    files: [
      {
        name: 'profile.yaml',
        yaml: `# ~/silas/profile.yaml
name: Silas Knobel
role: Software Architect & DevOps Engineer
base: Sirnach, Thurgau, CH
now:
  - Head of Operations @ Software Brauerei AG
  - Founder @ Zenify
languages: [Java, TypeScript, Python, Bash]
platform: [AWS, Kubernetes, Docker]
iac: [Terraform, Serverless]
passions: [harley, home-automation, electronics]
motto: "${motto}"`,
      },
      {
        name: 'garage.yaml',
        yaml: `# ~/silas/garage.yaml
machine: Harley-Davidson ${bike.model}
engine: ${bike.engine}
riding_since: ${bike.ridingSince}
fav_road: ${bike.homeRoads}
pre_ride_check: T-CLOCS
  # tires · controls · lights · oil · chassis · stand
notifications: off
pager: null
uptime: "until the tank is empty"`,
      },
    ],
    stats: [
      { value: '23', unit: 'yrs', label: 'in IT · since 2003' },
      { value: '11+', unit: 'yrs', label: 'at Software Brauerei AG' },
      { value: '2026', label: 'founded Zenify' },
      { value: '47.46°', unit: 'N', label: '8.99° E · Sirnach, Thurgau' },
    ],
  },

  marquee: [
    { label: 'AWS' },
    { label: 'Kubernetes' },
    { label: 'Terraform' },
    { label: 'Docker' },
    { label: 'Serverless' },
    { label: 'Microservices' },
    { label: 'V-Twin', strong: true },
    { label: 'TypeScript' },
    { label: 'Java' },
    { label: 'Python' },
    { label: 'Bash' },
    { label: 'Two wheels', strong: true },
  ],

  now: {
    heading: { index: '01 / Now', note: "what's running today", title: 'Currently in production.' },
    cards: [
      {
        meta: 'Full-time · since 2014',
        title: 'Head of Operations',
        subtitle: 'Software Brauerei AG',
        body: 'Responsible for operations at a Swiss software company: the platforms, pipelines and cloud infrastructure our teams ship on. Before that, eight years as Senior Software Engineer in the same house.',
        link: { href: '#log', label: 'full history in the runlog ↓' },
      },
      {
        meta: 'Founder · since 2026',
        title: 'Zenify',
        subtitle: 'Accounting & back office for the self-employed',
        body: 'A simple back office for sole traders in Switzerland: QR invoices, customers, income and expenses, and the annual statement for the tax return. Built, run and operated by me.',
        link: { href: site.links.zenify, label: 'zenify.ch ↗' },
      },
      {
        meta: 'Side quests · always',
        title: 'Open source',
        subtitle: 'Small AWS tools, shipped in the open',
        body: 'Cost exporters, Step Functions helpers and the occasional API wrapper. Plus a lot of home automation and electronics that never leaves the garage.',
        link: { href: site.links.github, label: 'github.com/katunch ↗' },
      },
    ],
  },

  stack: {
    heading: { index: '02 / Stack', note: 'from cloud down to code', title: 'The stack, layer by layer.' },
    layers: [
      { level: 'L4', name: 'Platform', hint: 'where it runs', items: ['AWS', 'Kubernetes', 'OpenShift', 'Serverless'] },
      { level: 'L3', name: 'Infrastructure', hint: "how it's built", items: ['Terraform', 'Docker', 'Node', 'Bun'] },
      { level: 'L2', name: 'Architecture', hint: "how it's shaped", items: ['Microservices', 'APIs', 'Queues'] },
      { level: 'L1', name: 'Data', hint: 'what it remembers', items: ['SQL', 'MongoDB', 'Redis'] },
      { level: 'L0', name: 'Code', hint: "what it's written in", items: ['Java', 'TypeScript / JavaScript', 'Python', 'Bash'] },
    ],
  },

  runlog: {
    heading: { index: '03 / Runlog', note: 'git log --since=2003', title: '23 years of commits.' },
    entries: [
      { period: '2026 — now', title: 'Founder', org: 'Zenify · self-employed', active: true, tag: { label: 'running' } },
      { period: '2023 — now', title: 'Head of Operations', org: 'Software Brauerei AG', active: true, tag: { label: 'HEAD → main', accent: true } },
      { period: '2014 — 2022', title: 'Senior Software Engineer', org: 'Software Brauerei AG' },
      { period: '2011 — 2014', title: 'Senior Software Engineer', org: 'Swisscom · Zürich' },
      { period: '2007 — 2011', title: 'Senior SAP NetWeaver Consultant', org: 'Resource AG · Wallisellen' },
      { period: '2003 — 2007', title: 'Informatiker EFZ', org: 'Apprenticeship · Bühler Group, Uzwil', tag: { label: 'initial commit' } },
    ],
  },

  source: {
    heading: { index: '04 / Source', note: 'github.com/katunch', title: 'Small tools, shipped in the open.' },
    repos: [
      {
        name: 'aws-to-tempo-cost-exporter',
        description:
          'Exports AWS account costs into Tempo Financial Manager on a schedule. EventBridge Scheduler triggers a Lambda; Terraform sets it all up.',
        language: 'HCL',
        stars: 1,
      },
      {
        name: 'aws-step-functions-s3-payload',
        description:
          'A small utility to read and save payloads in AWS Step Functions via S3, for when state outgrows the payload limit.',
        language: 'JavaScript',
      },
    ],
    allRepos: 'all repositories ↗',
  },

  product: {
    heading: { index: '05 / Product', note: 'live in production', title: 'PDF in.', titleAccent: 'Letter out.' },
    kicker: 'A Zenify side product',
    lead: 'No printer? No problem. Upload a PDF and ZenifyPrint prints it in colour, puts it in an envelope and posts it within Switzerland, usually arriving one to two working days later. Made for tax returns, contracts, cancellations and job applications.',
    link: 'zenify.ch/print ↗',
    pipeline: {
      label: 'How an order is processed',
      stages: [
        { name: 'upload', detail: 'PDF, up to 20 pages' },
        { name: 'print', detail: 'colour laser on A4, single- or double-sided' },
        { name: 'envelope', detail: 'C5 folded once, or B4 unfolded' },
        { name: 'post', detail: 'A-Post or registered mail with tracking' },
        { name: 'cleanup', detail: 'files deleted within 30 days of shipping' },
      ],
      price: { value: 'from CHF 6.10', note: 'printing, envelope and postage included' },
    },
  },

  ride: {
    heading: { index: '06 / Ride', note: 'off the clock', title: 'Signal lost.', titleAccent: 'Road found.' },
    photo: {
      caption: 'fig. 06 — the other production system · Passo dello Stelvio',
      alt: `Silas from behind on his Harley-Davidson ${bike.model}, turning through a hairpin on the Passo dello Stelvio, with rocky peaks and a glacier beyond the stone wall`,
      label: '[ Photo: you + your Harley ]',
      hint: '4:5 · your best shot from the road',
    },
    lead: 'When the laptop closes, the Harley comes out. No dashboards, no alerts, no on-call rotation — just a V-twin, a winding road through Eastern Switzerland and whatever the weather decides to do.',
    facts: [
      { term: 'machine', value: `Harley-Davidson ${bike.model}` },
      { term: 'engine', value: bike.engine },
      { term: 'riding since', value: bike.ridingSince },
      { term: 'fav road', value: bike.homeRoads },
      { term: 'side quests', value: 'home automation, electronics' },
    ],
    lessonsTitle: 'What the road taught me about ops',
    lessons: [
      {
        icon: 'checklist',
        title: 'Pre-ride check',
        body: 'T-CLOCS before every ride. Health checks, smoke tests and a rollback plan before every deploy. Same discipline, different machine.',
      },
      {
        icon: 'wave',
        title: 'Smooth is fast',
        body: 'Jerky inputs get you into trouble in a corner. In delivery, small, frequent, boring releases beat the big bang every time.',
      },
      {
        icon: 'pulse',
        title: 'Listen to the machine',
        body: 'You hear a tired bearing long before it fails. Good observability lets you hear your systems the same way.',
      },
    ],
  },

  contact: {
    heading: { index: '07 / Contact', note: "let's talk", title: "Let's build something that", titleAccent: 'runs.' },
    lead: 'Architecture reviews, cloud platforms, pipelines and operations — or just a good road recommendation for the weekend. Drop me a line.',
  },

  footer: {
    status: 'status: all systems nominal',
  },

  notFound: {
    title: 'Page not found — Silas Knobel',
    heading: { index: '404 / Not found', note: 'no route to host', title: 'Dead end.', titleAccent: 'Turn around.' },
    lead: "This page doesn't exist — or not any more. Maybe a typo in the address, maybe an old link. The homepage is just one hairpin away.",
    back: '← back to katun.ch',
  },
} satisfies Dictionary;
