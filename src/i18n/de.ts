// German copy (Swiss spelling), the default language, served at /.

import { bike, site } from '../data/site';
import type { Dictionary } from './types';

const motto = 'Papa. Macher. Problemlöser.';

export default {
  lang: 'de-CH',
  ogLocale: 'de_CH',
  language: { code: 'DE', name: 'Deutsch' },
  motto,

  meta: {
    title: 'Silas Knobel — Software-Architekt, DevOps Engineer, Motorradfahrer',
    description:
      'Silas Knobel ist Software-Architekt und DevOps Engineer aus dem Thurgau. Er baut Cloud-Plattformen, die auch um 3 Uhr nachts ruhig bleiben — und fährt am Wochenende Harley.',
    byline: 'Silas Knobel — Software-Architekt & DevOps Engineer',
  },

  ui: {
    skipLink: 'Zum Inhalt springen',
    mainNav: 'Hauptnavigation',
    backToTop: 'nach oben',
    home: 'Startseite',
    contact: 'kontakt',
    themeLight: 'Zum hellen Design wechseln',
    themeDark: 'Zum dunklen Design wechseln',
    terminal: 'Profildateien',
    star: 'Stern',
    stars: 'Sterne',
    archived: 'archiviert',
  },

  nav: [
    { href: '#now', label: 'jetzt' },
    { href: '#stack', label: 'stack' },
    { href: '#log', label: 'runlog' },
    { href: '#source', label: 'code' },
    { href: '#print', label: 'produkt' },
    { href: '#ride', label: 'unterwegs' },
  ],

  hero: {
    title: ['Wenig Latenz.', 'Viel Drehmoment.'],
    lead: 'Ich bin {name} — Software-Architekt und DevOps Engineer aus dem Thurgau. Tagsüber entwerfe ich Cloud-Plattformen, die auch um 3 Uhr nachts ruhig bleiben. Am Wochenende sitze ich auf meiner Harley, irgendwo im Funkloch.',
    actions: { runlog: 'runlog ansehen →', ride: 'zur maschine' },
    roles: ['Head of Operations @ Software Brauerei AG', 'Gründer @ Zenify'],
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
home_roads: ${bike.homeRoads}
pre_ride_check: T-CLOCS
  # Reifen · Bedienelemente · Licht · Öl · Fahrwerk · Ständer
notifications: off
pager: null
uptime: "bis der Tank leer ist"`,
      },
    ],
    stats: [
      { value: '23', unit: 'Jahre', label: 'in der IT · seit 2003' },
      { value: '11+', unit: 'Jahre', label: 'bei der Software Brauerei AG' },
      { value: '2026', label: 'Zenify gegründet' },
      { value: '47.46°', unit: 'N', label: '8.99° O · Sirnach, Thurgau' },
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
    { label: 'Zwei Räder', strong: true },
  ],

  now: {
    heading: { index: '01 / Jetzt', note: 'was heute läuft', title: 'Aktuell in Produktion.' },
    cards: [
      {
        meta: 'Vollzeit · seit 2014',
        title: 'Head of Operations',
        subtitle: 'Software Brauerei AG',
        body: 'Verantwortlich für den Betrieb bei einem Schweizer Softwarehaus: die Plattformen, Pipelines und die Cloud-Infrastruktur, auf denen unsere Teams ausliefern. Davor acht Jahre als Senior Software Engineer im selben Haus.',
        link: { href: '#log', label: 'ganzer werdegang im runlog ↓' },
      },
      {
        meta: 'Gründer · seit 2026',
        title: 'Zenify',
        subtitle: 'Buchhaltung & Backoffice für Selbständige',
        body: 'Ein einfaches Backoffice für Einzelfirmen in der Schweiz: QR-Rechnungen, Kunden, Einnahmen und Ausgaben und der Jahresabschluss für die Steuererklärung. Von mir entwickelt und betrieben.',
        link: { href: site.links.zenify, label: 'zenify.ch ↗' },
      },
      {
        meta: 'Nebenprojekte · immer',
        title: 'Open Source',
        subtitle: 'Kleine AWS-Tools, offen entwickelt',
        body: 'Cost-Exporter, Helfer für Step Functions und hin und wieder ein API-Wrapper. Dazu jede Menge Hausautomation und Elektronik, die nie die Garage verlässt.',
        link: { href: site.links.github, label: 'github.com/katunch ↗' },
      },
    ],
  },

  stack: {
    heading: { index: '02 / Stack', note: 'von der Cloud bis zum Code', title: 'Der Stack, Schicht für Schicht.' },
    layers: [
      { level: 'L4', name: 'Plattform', hint: 'wo es läuft', items: ['AWS', 'Kubernetes', 'OpenShift', 'Serverless'] },
      { level: 'L3', name: 'Infrastruktur', hint: 'wie es gebaut wird', items: ['Terraform', 'Docker', 'Node', 'Bun'] },
      { level: 'L2', name: 'Architektur', hint: 'wie es geschnitten ist', items: ['Microservices', 'APIs', 'Queues'] },
      { level: 'L1', name: 'Daten', hint: 'woran es sich erinnert', items: ['SQL', 'MongoDB', 'Redis'] },
      { level: 'L0', name: 'Code', hint: 'worin es geschrieben ist', items: ['Java', 'TypeScript / JavaScript', 'Python', 'Bash'] },
    ],
  },

  runlog: {
    heading: { index: '03 / Runlog', note: 'git log --since=2003', title: '23 Jahre Commits.' },
    entries: [
      { period: '2026 — heute', title: 'Gründer', org: 'Zenify · selbständig', active: true, tag: { label: 'running' } },
      { period: '2023 — heute', title: 'Head of Operations', org: 'Software Brauerei AG', active: true, tag: { label: 'HEAD → main', accent: true } },
      { period: '2014 — 2022', title: 'Senior Software Engineer', org: 'Software Brauerei AG' },
      { period: '2011 — 2014', title: 'Senior Software Engineer', org: 'Swisscom · Zürich' },
      { period: '2007 — 2011', title: 'Senior SAP NetWeaver Consultant', org: 'Resource AG · Wallisellen' },
      { period: '2003 — 2007', title: 'Informatiker EFZ', org: 'Lehre · Bühler Group, Uzwil', tag: { label: 'initial commit' } },
    ],
  },

  source: {
    heading: { index: '04 / Code', note: 'github.com/katunch', title: 'Kleine Tools, offen entwickelt.' },
    repos: [
      {
        name: 'aws-to-tempo-cost-exporter',
        description:
          'Exportiert AWS-Kontokosten zeitgesteuert in den Tempo Financial Manager. Der EventBridge Scheduler stösst eine Lambda an; Terraform richtet alles ein.',
        language: 'HCL',
        stars: 1,
      },
      {
        name: 'aws-step-functions-s3-payload',
        description:
          'Ein kleines Hilfsmittel, um Payloads in AWS Step Functions über S3 zu lesen und zu speichern — für den Fall, dass der State das Payload-Limit sprengt.',
        language: 'JavaScript',
      },
    ],
    allRepos: 'alle Repositories ↗',
  },

  product: {
    heading: { index: '05 / Produkt', note: 'live in Produktion', title: 'PDF rein.', titleAccent: 'Brief raus.' },
    kicker: 'Ein Nebenprodukt von Zenify',
    lead: 'Kein Drucker? Kein Problem. PDF hochladen, und ZenifyPrint druckt es in Farbe, steckt es ins Couvert und verschickt es innerhalb der Schweiz — meist ist es innert ein bis zwei Werktagen da. Gemacht für Steuererklärungen, Verträge, Kündigungen und Bewerbungen.',
    link: 'zenify.ch/print ↗',
    pipeline: {
      label: 'So wird eine Bestellung verarbeitet',
      stages: [
        { name: 'upload', detail: 'PDF, bis 20 Seiten' },
        { name: 'print', detail: 'Farblaser auf A4, einseitig oder beidseitig' },
        { name: 'envelope', detail: 'C5 einmal gefaltet oder B4 ungefaltet' },
        { name: 'post', detail: 'A-Post oder Einschreiben mit Tracking' },
        { name: 'cleanup', detail: 'Dateien innert 30 Tagen nach Versand gelöscht' },
      ],
      price: { value: 'ab CHF 6.10', note: 'Druck, Couvert und Porto inklusive' },
    },
  },

  ride: {
    heading: { index: '06 / Unterwegs', note: 'nach Feierabend', title: 'Kein Empfang.', titleAccent: 'Freie Fahrt.' },
    photo: {
      caption: 'Abb. 06 — das andere Produktivsystem · Stilfserjoch',
      alt: `Silas von hinten auf seiner Harley-Davidson ${bike.model} in einer Kehre am Stilfserjoch, hinter der Steinmauer Felsgipfel und ein Gletscher`,
      label: '[ Foto: du + deine Harley ]',
      hint: '4:5 · dein bestes Bild von unterwegs',
    },
    lead: 'Wenn der Laptop zugeht, kommt die Harley raus. Keine Dashboards, keine Alerts, kein Pikettdienst — nur ein V-Twin, eine kurvige Strasse durch die Ostschweiz und das Wetter, das sowieso macht, was es will.',
    facts: [
      { term: 'maschine', value: `Harley-Davidson ${bike.model}` },
      { term: 'motor', value: bike.engine },
      { term: 'fährt seit', value: bike.ridingSince },
      { term: 'lieblingsstrecke', value: bike.homeRoads },
      { term: 'nebenprojekte', value: 'Hausautomation, Elektronik' },
    ],
    lessonsTitle: 'Was mich die Strasse über Ops gelehrt hat',
    lessons: [
      {
        icon: 'checklist',
        title: 'Check vor der Fahrt',
        body: 'T-CLOCS vor jeder Fahrt. Health Checks, Smoke Tests und ein Rollback-Plan vor jedem Deploy. Gleiche Disziplin, andere Maschine.',
      },
      {
        icon: 'wave',
        title: 'Flüssig ist schnell',
        body: 'Ruckartige Eingaben bringen dich in der Kurve in Schwierigkeiten. Bei der Auslieferung schlagen kleine, häufige, langweilige Releases den Big Bang jedes Mal.',
      },
      {
        icon: 'pulse',
        title: 'Hör auf die Maschine',
        body: 'Ein müdes Lager hörst du lange, bevor es ausfällt. Mit guter Observability hörst du deine Systeme genauso.',
      },
    ],
  },

  contact: {
    heading: { index: '07 / Kontakt', note: 'reden wir', title: 'Lass uns etwas bauen, das', titleAccent: 'läuft.' },
    lead: 'Architektur-Reviews, Cloud-Plattformen, Pipelines und Betrieb — oder einfach ein guter Streckentipp fürs Wochenende. Schreib mir.',
  },

  footer: {
    status: 'status: alle Systeme im grünen Bereich',
  },

  notFound: {
    title: 'Seite nicht gefunden — Silas Knobel',
    heading: { index: '404 / Nicht gefunden', note: 'no route to host', title: 'Sackgasse.', titleAccent: 'Wenden.' },
    lead: 'Diese Seite gibt es nicht — oder nicht mehr. Vielleicht ein Tippfehler in der Adresse, vielleicht ein alter Link. Die Startseite ist nur eine Kehre entfernt.',
    back: '← zurück zu katun.ch',
  },
} satisfies Dictionary;
