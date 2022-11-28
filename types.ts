export type ErrObject = {
  log: string,
  status: number, 
  message: {err: string}
}

export type EncounterData = {
  encounterName: string,
  bossName: string,
  duration: number,
  variations: number,
  abilities: {
    name: string,
    type: 'raidwide' | 'tankbuster' | 'other',
    description: string,
    time: number,
    appearsInVariation: number[],
  }[]
};

export type Encounters = {
  [key: string]: EncounterData
}

export type Player = {
  job: string
}

export type Job = {
  name: string,
  fullName: string,
  iconPath: string,
  role: 'tank' | 'healer' | 'melee' | 'ranged' | 'caster',
  abilities: {
    name: string,
  }[]
}