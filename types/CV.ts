type services = { linkedin?: string; github?: string };

type person = {
  name: {
    first: string;
    last: 'Di Luzio'; // we could support other spellings of the name later on
  };
  image?: string;
  birthday?: Date;
  profession: string;
  shortText?: string;
  email?: string;
  website?: string;
  services: services;
  interests?: Array<{ title: string; icon?: string }>;
};

type project = {
  title: string;
  role: string;
  image?: string;
  description: string;
  url?: string;
  timeframe?: { start?: Date; end?: Date | 'current' };
  subprojects?: Array<project>;
};

export enum languageProficiency {
  native = 'Native',
  C2 = 'C2',
  C1 = 'C1',
  B2 = 'B2',
  B1 = 'B1',
  A2 = 'A2',
  A1 = 'A1',
}

export enum proficiency {
  strong = 0x0001,
  knowledgeable = 0x1001,
}

type skills = {
  languages?: Array<{ lang: string; proficiency: languageProficiency }>;
  programminglangs?: Array<{ lang: string; proficiency: proficiency }>;
  certificates?: Array<{ title: string; link?: string }>;
  misc?: Array<{ title: string }>;
};

export type profile = {
  person: person;
  projects: Array<project>;
  skills: skills;
};