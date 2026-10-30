// The shape of one language's copy. Every language file provides all of it.

export interface SectionHeading {
  /** e.g. "01 / Now" */
  index: string;
  note: string;
  title: string;
  /** Trailing part of the title, set in the accent colour. */
  titleAccent?: string;
}

export interface Dictionary {
  /** BCP 47 tag for <html lang>. */
  lang: string;
  /** Open Graph locale, e.g. de_CH. */
  ogLocale: string;
  /** How the language switch offers this language. */
  language: { code: string; name: string };
  /** Shown in the footer and in profile.yaml. */
  motto: string;

  meta: {
    title: string;
    description: string;
    /** Line under the headline on the social preview image. */
    byline: string;
  };

  /** Interface labels, mostly for assistive technology. */
  ui: {
    skipLink: string;
    mainNav: string;
    backToTop: string;
    home: string;
    contact: string;
    themeLight: string;
    themeDark: string;
    terminal: string;
    star: string;
    stars: string;
    archived: string;
  };

  nav: { href: string; label: string }[];

  hero: {
    /** Two lines; the second is set in the accent colour. Also used on the social preview image. */
    title: [string, string];
    /** `{name}` is replaced by the name, set in bold. */
    lead: string;
    actions: { runlog: string; ride: string };
    roles: string[];
    /** Tabs in the hero terminal. */
    files: { name: string; yaml: string }[];
    stats: { value: string; unit?: string; label: string }[];
  };

  /** `strong` items are highlighted. */
  marquee: { label: string; strong?: boolean }[];

  now: {
    heading: SectionHeading;
    cards: { meta: string; title: string; subtitle: string; body: string; link: { href: string; label: string } }[];
  };

  stack: {
    heading: SectionHeading;
    layers: { level: string; name: string; hint: string; items: string[] }[];
  };

  runlog: {
    heading: SectionHeading;
    /** Newest first. `active` entries get a filled dot; `tag` renders as a pill. */
    entries: { period: string; title: string; org: string; active?: boolean; tag?: { label: string; accent?: boolean } }[];
  };

  source: {
    heading: SectionHeading;
    repos: { name: string; description: string; language: string; stars?: number; archived?: boolean }[];
    allRepos: string;
  };

  /** ZenifyPrint showcase. */
  product: {
    heading: SectionHeading;
    /** Small line above the product name. */
    kicker: string;
    lead: string;
    link: string;
    /** The order flow, shown as a deploy pipeline. */
    pipeline: {
      /** Accessible name of the stage list. */
      label: string;
      stages: { name: string; detail: string }[];
      price: { value: string; note: string };
    };
  };

  ride: {
    heading: SectionHeading;
    /** `label` and `hint` fill the placeholder frame when there is no photo. */
    photo: { caption: string; alt: string; label: string; hint: string };
    lead: string;
    facts: { term: string; value: string }[];
    lessonsTitle: string;
    lessons: { icon: 'checklist' | 'wave' | 'pulse'; title: string; body: string }[];
  };

  contact: {
    heading: SectionHeading;
    lead: string;
  };

  footer: {
    status: string;
  };

  notFound: {
    title: string;
    heading: SectionHeading;
    lead: string;
    back: string;
  };
}
