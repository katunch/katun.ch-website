// German copy (Swiss spelling) of the GTA release variant, served at /.

import { bike, site } from '../../data/site';
import type { GtaDictionary } from './types';

const claim: [string, string] = ['Wenig Latenz.', 'Viel Drehmoment.'];
const price = 'CHF 6.10';

export default {
  lang: 'de-CH',
  ogLocale: 'de_CH',
  language: { name: 'Deutsch', version: 'Deutsche Version' },

  meta: {
    title: `${site.name} – ${claim.join(' ')}`,
    description:
      'Silas Knobel, Software-Architekt und DevOps Engineer aus dem Thurgau. Cloud-Plattformen, Pipelines, Betrieb – und am Wochenende Motorrad.',
  },

  ui: {
    skipLink: 'Zum Inhalt springen',
    home: `${site.name}, zum Seitenanfang`,
    mainNav: 'Hauptnavigation',
  },

  nav: {
    sections: [
      { href: '#now', label: 'jetzt' },
      { href: '#stack', label: 'stack' },
      { href: '#log', label: 'runlog' },
      { href: '#source', label: 'code' },
      { href: '#print', label: 'produkt' },
      { href: '#ride', label: 'unterwegs' },
    ],
    contact: { href: '#contact', label: 'kontakt' },
  },

  hud: {
    cash: price,
    cashLabel: `ZenifyPrint ab ${price}`,
    cheatCash: 'CHF 999 999.10',
    wanted: {
      calm: 'Fahndungsstufe null: alle Systeme im grünen Bereich',
      hot: 'Fahndungsstufe fünf',
    },
  },

  help: {
    headline: 'Donnerstag, 19. November, ist Release-Tag.',
    remaining: 'Noch {days}, {time}.',
    day: '1 Tag',
    days: '{n} Tage',
    todayHeadline: 'Heute ist Release-Tag.',
    today: 'Viel Spass da draussen.',
    close: 'Hinweis schliessen',
  },

  hero: {
    label: 'Einstieg',
    claim,
    lede: 'Software-Architekt und DevOps Engineer aus dem Thurgau. Tagsüber entwerfe ich Cloud-Plattformen, am Wochenende fahre ich Motorrad.',
    actions: { contact: 'Kontakt aufnehmen', missions: 'Aktuelle Missionen ansehen' },
    tipLabel: 'Tipp',
    tips: [
      'Kleine, häufige Releases fahren sich wie sanfte Eingaben am Gasgriff.',
      'Vor jeder Fahrt ein Check. Vor jedem Deploy auch.',
      'PDFs, die du über ZenifyPrint verschickst, werden nach 30 Tagen gelöscht.',
      'Im Werkzeugrad schaltest du mit den Pfeiltasten durch die Schichten.',
      'Ein Wort aus dem Claim funktioniert auf dieser Seite als Cheat.',
    ],
    nextTip: 'Nächster Tipp',
    loading: 'Thurgau wird geladen',
    loaded: 'Geladen',
  },

  cheat: {
    word: 'drehmoment',
    toastTitle: 'Cheat aktiviert:',
    toastText: 'volles Drehmoment.',
  },

  missions: {
    title: 'Aktuelle Missionen',
    lede: 'Was gerade läuft: im Betrieb, im eigenen Unternehmen und nebenbei auf GitHub.',
    cards: [
      {
        title: 'Head of Operations',
        org: 'Software Brauerei AG',
        body: 'Seit 2023 verantwortlich für den Betrieb. Davor acht Jahre als Senior Software Engineer im selben Haus.',
      },
      {
        title: 'Gründer von Zenify',
        org: 'Seit 2026',
        body: 'Das Buchhaltungs-Backoffice für Einzelfirmen in der Schweiz.',
        link: { href: site.links.zenify, label: 'zenify.ch besuchen' },
      },
      {
        title: 'Open Source',
        org: 'Nebenbei',
        body: 'Werkzeuge rund um AWS und Hausautomation, frei verfügbar.',
        link: { href: site.links.github, label: 'Projekte auf GitHub ansehen' },
      },
    ],
  },

  stack: {
    title: 'Werkzeugrad',
    lede: 'Fünf Schichten, ein Stack. Wähle eine Schicht, um die Werkzeuge darin zu sehen.',
    hint: {
      before: 'Mit',
      between: 'und',
      after: 'durch die Schichten schalten.',
      left: 'Pfeil links',
      right: 'Pfeil rechts',
    },
    layers: [
      { name: 'Plattform', tools: ['AWS', 'Kubernetes', 'OpenShift', 'Serverless'] },
      { name: 'Infrastruktur', tools: ['Terraform', 'Docker', 'Node', 'Bun'] },
      { name: 'Architektur', tools: ['Microservices', 'APIs', 'Queues'] },
      { name: 'Daten', tools: ['SQL', 'MongoDB', 'Redis'] },
      { name: 'Code', tools: ['Java', 'TypeScript / JavaScript', 'Python', 'Bash'] },
    ],
  },

  runlog: {
    title: 'Runlog',
    lede: '23 Jahre im Spiel, kein Game Over. Alle Missionen seit der Lehre, von der ersten Zeile Code bis zur eigenen Firma.',
    entries: [
      { years: '2003–2007', role: 'Informatiker-Lehre', org: 'Bühler Group', state: 'bestanden' },
      { years: '2007–2011', role: 'Senior SAP NetWeaver Consultant', org: 'Resource AG', state: 'bestanden' },
      { years: '2011–2014', role: 'Senior Software Engineer', org: 'Swisscom', state: 'bestanden' },
      { years: '2014–2022', role: 'Senior Software Engineer', org: 'Software Brauerei AG', state: 'bestanden' },
      { years: '2023–heute', role: 'Head of Operations', org: 'Software Brauerei AG', state: 'läuft', live: true },
      { years: '2026', role: 'Gründung', org: 'Zenify', state: 'läuft', live: true },
    ],
  },

  source: {
    title: 'Code',
    lede: 'Offene Jobs auf GitHub: Werkzeuge, die aus dem Alltag im Betrieb entstanden sind.',
    open: 'Repository öffnen',
    repos: [
      {
        kind: 'Terraform / HCL',
        name: 'aws-to-tempo-cost-exporter',
        facts: [
          { term: 'Ziel', value: 'Exportiert AWS-Kosten pro Account in den Tempo Financial Manager.' },
          { term: 'Ablauf', value: 'Zeitgesteuert mit EventBridge Scheduler und Lambda.' },
        ],
      },
      {
        kind: 'JavaScript',
        name: 'aws-step-functions-s3-payload',
        facts: [{ term: 'Ziel', value: 'Liest und speichert Payloads von AWS Step Functions über S3.' }],
      },
    ],
    bonus: {
      kind: 'Bonus-Job, archiviert',
      name: 'gta-v-cheat-sheets',
      body: 'Eine Sammlung von Cheats, passend zum Donnerstag. Auch diese Seite kennt einen: Tippe das letzte Wort des Claims.',
    },
  },

  product: {
    title: 'ZenifyPrint',
    lede: 'PDF hochladen, fertig. Das Dokument wird farbig gedruckt, couvertiert und innerhalb der Schweiz verschickt.',
    from: 'ab',
    price,
    note: 'inklusive Druck, Couvert und Porto',
    link: 'PDF bei ZenifyPrint hochladen',
    map: {
      title: 'Ablauf von ZenifyPrint: 1 Upload, 2 Druck, 3 Couvert, 4 Post, 5 nach 30 Tagen gelöscht',
      stops: ['Upload', 'Druck', 'Couvert', 'Post', 'nach 30 Tagen gelöscht'],
    },
    objective: { before: 'Bringe das PDF zur ', target: 'Post', after: '.' },
  },

  ride: {
    title: 'Unterwegs',
    lede: `Die Garage hat einen Stellplatz. Seit ${bike.ridingSince} auf zwei Rädern, am liebsten durch die ${bike.homeRoads}.`,
    photo: {
      alt: `Silas auf seiner ${bike.model} im Sonnenuntergang, gemalt im Stil eines Open-World-Spiels: Palmen, Meer, eine Skyline und ein Helikopter am Himmel.`,
      zone: 'Stilfserjoch',
      altitude: '2757 m ü. M.',
    },
    stats: {
      maker: 'Harley-Davidson',
      model: bike.model,
      bars: ['Drehmoment', 'Latenz'],
      specs: [
        { term: 'Motor', value: bike.engine },
        { term: 'Fahrpraxis', value: `seit ${bike.ridingSince}` },
        { term: 'Lieblingsstrecke', value: bike.homeRoads },
      ],
    },
    lessonsTitle: 'Was der Betrieb vom Motorrad lernt',
    lessons: [
      {
        title: 'Vor jeder Fahrt ein Check',
        body: 'Reifen, Licht, Bremsen. Vor jedem Deploy gilt dasselbe: erst die Checkliste, dann losfahren.',
      },
      {
        title: 'Sanfte Eingaben',
        body: 'Flüssig statt ruckartig. Kleine, häufige Releases halten das System ruhig in der Spur.',
      },
      {
        title: 'Auf Warnsignale hören',
        body: 'Die Maschine meldet sich, bevor etwas kaputtgeht. Wer zuhört, muss selten abschleppen.',
      },
    ],
  },

  contact: {
    title: 'Neue Mission?',
    lede: 'Architektur-Reviews, Cloud-Plattformen, Pipelines und Betrieb. Melde dich über einen dieser Kanäle, dann besprechen wir den Auftrag.',
    app: 'Kontakte',
    hint: 'Tippe auf einen Kontakt, um die Mission zu starten.',
  },

  footer: {
    motto: 'Papa. Macher. Problemlöser.',
    status: 'alle Systeme im grünen Bereich',
    note: 'Inoffizielle Hommage zum Release-Donnerstag. Keine Verbindung zu Rockstar Games oder Take-Two Interactive.',
  },

  minimap: { uptime: 'Uptime', coffee: 'Kaffee' },

  banner: { title: 'Seite durchgespielt', text: '100 % von katun.ch erkundet' },
} satisfies GtaDictionary;
