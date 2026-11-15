// The shape of one language's copy for the GTA release variant (src/components/gta/).
// Every language file provides all of it.

export interface GtaDictionary {
  /** BCP 47 tag for <html lang>. */
  lang: string;
  /** Open Graph locale, e.g. de_CH. */
  ogLocale: string;
  /** How the pause-menu language switch and the footer link offer this language, written in this language. */
  language: { name: string; version: string };

  meta: { title: string; description: string };

  /** Interface labels, mostly for assistive technology. */
  ui: {
    skipLink: string;
    /** Accessible name of the SK link to the top of the page. */
    home: string;
    mainNav: string;
    /** Accessible names of the burger button below the desktop breakpoint, closed and open. */
    menuOpen: string;
    menuClose: string;
    /** Heading of the open menu overlay. */
    menu: string;
  };

  /** Pause-menu tabs. The language switch comes after `contact`: at the right end of the bar, at the bottom of the menu overlay. */
  nav: {
    sections: { href: string; label: string }[];
    contact: { href: string; label: string };
  };

  hud: {
    cash: string;
    cashLabel: string;
    /** Shown while the cheat is active. */
    cheatCash: string;
    /** Accessible names of the wanted-level stars. */
    wanted: { calm: string; hot: string };
  };

  /** Release countdown box above the hero. */
  help: {
    headline: string;
    /** `{days}` is `day` or `days`, `{time}` is hh:mm:ss. */
    remaining: string;
    /** Under 24 hours left: `{time}` only. */
    remainingTime: string;
    day: string;
    /** `{n}` is the number of days. */
    days: string;
    todayHeadline: string;
    today: string;
    close: string;
  };

  hero: {
    /** Accessible name of the hero section. */
    label: string;
    /** Two lines; the second is set in the neon script. */
    claim: [string, string];
    lede: string;
    actions: { contact: string; missions: string };
    tipLabel: string;
    /** Loading-screen tips; the first is shown before the script runs. */
    tips: string[];
    nextTip: string;
    loading: string;
    loaded: string;
  };

  /** Typing `word` anywhere on the page triggers the cheat. */
  cheat: {
    /** Last word of `hero.claim`, lowercase. */
    word: string;
    toastTitle: string;
    toastText: string;
  };

  missions: {
    title: string;
    lede: string;
    /** In order: Software Brauerei, Zenify, open source. */
    cards: { title: string; org: string; body: string; link?: { href: string; label: string } }[];
  };

  stack: {
    title: string;
    lede: string;
    /** "{before} ← {between} → {after}" */
    hint: { before: string; between: string; after: string; left: string; right: string };
    /** In order: platform, infrastructure, architecture, data, code. */
    layers: { name: string; tools: string[] }[];
  };

  runlog: {
    title: string;
    lede: string;
    /** Oldest first. `live` entries are highlighted. */
    entries: { years: string; role: string; org: string; state: string; live?: boolean }[];
  };

  source: {
    title: string;
    lede: string;
    open: string;
    /** `name` is the repository under github.com/katunch. */
    repos: { kind: string; name: string; facts: { term: string; value: string }[] }[];
    bonus: { kind: string; name: string; body: string };
  };

  product: {
    title: string;
    lede: string;
    from: string;
    price: string;
    note: string;
    link: string;
    map: {
      /** Accessible name of the route map. */
      title: string;
      /** Labels next to the five numbered stops. */
      stops: [string, string, string, string, string];
    };
    /** "{before}<em>{target}</em>{after}" */
    objective: { before: string; target: string; after: string };
  };

  ride: {
    title: string;
    lede: string;
    photo: { alt: string; zone: string; altitude: string };
    stats: {
      maker: string;
      model: string;
      /** Torque (full), latency (low). */
      bars: [string, string];
      specs: { term: string; value: string }[];
    };
    lessonsTitle: string;
    lessons: { title: string; body: string }[];
  };

  contact: {
    title: string;
    lede: string;
    app: string;
    hint: string;
  };

  footer: {
    motto: string;
    status: string;
    note: string;
  };

  /** `title` attributes of the bars under the minimap. */
  minimap: { uptime: string; coffee: string };

  /** Shown once when the footer comes into view. */
  banner: { title: string; text: string };
}
