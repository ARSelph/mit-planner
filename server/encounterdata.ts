/*
Information needed from encounter:
{
  encounterName: string,
  bossName: string,
  duration: number (length of encounter in seconds),
  variations: number (possible rng changing encounter),
  abilities: [
    {
      name: string,
      type: raidwide | tankbuster | other,
      description: string,
      time: number,
      appearsInVariation: number[],
    }
  ] 
}
*/

type EncounterData = {
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

type Encounters = {
  [key: string]: EncounterData
}

const encounters: Encounters = {
  p8s1: {
    encounterName: 'Abyssos: The Eighth Circle (Savage) - Part 1',
    bossName: 'Hephaistos',
    duration: 473,
    variations: 2,
    abilities: [
      {
        name: 'Genesis of Flame',
        type: 'raidwide',
        description: 'High raid damage',
        time: 12,
        appearsInVariation: [0, 1]
      }
    ]
  }
}

export default encounters;