import { EncounterData } from "../../types";

const p8s1: EncounterData = {
  encounterName: 'Abyssos: The Eighth Circle (Savage) - Part 1',
  bossName: 'Hephaistos',
  level: 90,
  duration: 473,
  variations: 2,
  abilities: [
    {
      name: 'Genesis of Flame',
      type: 'raidwide',
      damageType: 'magical',
      description: 'High raid damage',
      time: 12,
      appearsInVariation: [0, 1]
    },
    {
      name: 'Emergent Tetraflare/Octaflare',
      type: 'raidwide',
      damageType: 'magical',
      description: 'Shared damage on tank/healer or dps / AoE on all players',
      time: 41,
      appearsInVariation: [0, 1]
    },
    {
      name: 'Flameviper',
      type: 'tankbuster',
      damageType: 'magical',
      description: 'Line AoE tank buster on main tank and then off tank. Both hits apply bleed and vulnerability (magic)',
      time: 48,
      appearsInVariation: [0, 1]
    },
    {
      name: 'Footprint',
      type: 'raidwide',
      damageType: 'physical',
      description: 'Knockback centered on the boss with minor damage',
      time: 70,
      appearsInVariation: [0]
    },
    {
      name: 'Rearing Rampage/Uplift',
      type: 'raidwide',
      damageType: 'physical',
      description: 'Four pulses of raidwide damage plus AoE on each player that applies vulnerability',
      time: 77,
      appearsInVariation: [0]
    },
    {
      name: 'Stomp Dead',
      type: 'other',
      damageType: 'physical',
      description: 'Jumps four times, each time to the furthest player, dealing shared AoE damage and applying vulnerability',
      time: 90,
      appearsInVariation: [0]
    }
  ]
}

export default p8s1;