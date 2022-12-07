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
  abilities: Ability[]
}

export type Ability = {
  name: string,
  type: 'ability' | 'spell' | 'weaponskill',
  recast: number,
  charges: number,
  range: number | null,
  radius: number | null,
  description: string,
  requires?: string[],
  effects: {
    target: 'self' | 'single' | 'aoe',
    includesSelf: boolean,
    healing?: {
      potency: number
    },
    regen?: {
      potency: number,
      duration: number
    },
    barrier?: {
      potency: number,
      duration: number
    },
    damageReduction?: {
      amount: number,
      duration: number
    },
    physicalDamageReduction?: {
      amount: number,
      duration: number
    },
    magicalDamageReduction?: {
      amount: number,
      duration: number
    },
    maxHpIncrease?: {
      amount: number,
      duration: number
    },
    hpRecoveryIncrease?: {
      amount: number,
      duration: number
    },
    healingMagicPotencyIncrease?: {
      amount: number,
      duration: number
    }
    block?: {
      duration: number
    },
    invulnerability?: {
      duration: number
    },
    synastry?: {
      amount: number,
      duration: number
    }
    grantsBuff?: {
      name: string,
      duration: number
    },
    compiledDamageHeal?: {
      amount: number
    }
  }[]
}