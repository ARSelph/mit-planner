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

import { Encounters, EncounterData } from "../types";

// type EncounterData = {
//   encounterName: string,
//   bossName: string,
//   duration: number,
//   variations: number,
//   abilities: {
//     name: string,
//     type: 'raidwide' | 'tankbuster' | 'other',
//     description: string,
//     time: number,
//     appearsInVariation: number[],
//   }[]
// };

// type Encounters = {
//   [key: string]: EncounterData
// }

const encounters: Encounters = {
  p5s: {
    encounterName: 'Abyssos: The Fifth Circle (Savage)',
    bossName: 'Proto-Carbuncle',
    duration: 600,
    variations: 1,
    abilities: []
  },
  p6s: {
    encounterName: 'Abyssos: The Sixth Circle (Savage)',
    bossName: 'Hegemone',
    duration: 640,
    variations: 1,
    abilities: []
  },
  p7s: {
    encounterName: 'Abyssos: The Seventh Circle (Savage)',
    bossName: 'Agdistis',
    duration: 673,
    variations: 1,
    abilities: []
  },
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
      },
      {
        name: 'Emergent Tetraflare/Octaflare',
        type: 'raidwide',
        description: 'Shared damage on tank/healer or dps / AoE on all players',
        time: 41,
        appearsInVariation: [0, 1]
      },
      {
        name: 'Flameviper',
        type: 'tankbuster',
        description: 'Line AoE tank buster on main tank and then off tank. Both hits apply bleed and vulnerability (magic)',
        time: 48,
        appearsInVariation: [0, 1]
      },
      {
        name: 'Footprint',
        type: 'raidwide',
        description: 'Knockback centered on the boss with minor damage',
        time: 70,
        appearsInVariation: [0]
      },
      {
        name: 'Rearing Rampage/Uplift',
        type: 'raidwide',
        description: 'Four pulses of raidwide damage plus AoE on each player that applies vulnerability',
        time: 77,
        appearsInVariation: [0]
      },
      {
        name: 'Stomp Dead',
        type: 'other',
        description: 'Jumps four times, each time to the furthest player, dealing shared AoE damage and applying vulnerability',
        time: 90,
        appearsInVariation: [0]
      }
    ]
  },
  p8s2: {
    encounterName: 'Abyssos: The Eighth Circle (Savage) - Part 2',
    bossName: 'Hephaistos',
    duration: 507,
    variations: 1,
    abilities: []
  }
}

export default encounters;