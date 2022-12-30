import { JobString } from "./server/jobData/allJobs";

export type ErrObject = {
  log: string,
  status: number, 
  message: {err: string}
}

export type BossAbility = {
  name: string,
  type: 'raidwide' | 'tankbuster' | 'other',
  damageType: 'physical' | 'magical' | 'special'
  description: string,
  time: number,
  appearsInVariation: number[],
};

export type EncounterData = {
  encounterName: string,
  bossName: string,
  level: number,
  duration: number,
  variations: number,
  abilities: BossAbility[]
};

export type Encounters = {
  [key: string]: EncounterData
}

export type Player = {
  job: Job,
  abilityUses: {
    [key: number]: AbilityUse[]
  }
  cooldowns: {
    [key: string]: number[]
  }
}

export type AbilityUse = {
  ability: Ability,
  time: number,
  target: Player | null
}

export type Job = {
  name: string,
  fullName: string,
  iconPath: string,
  role: 'tank' | 'healer' | 'melee' | 'ranged' | 'caster',
  abilities: {
    [key: string]: Ability
  }
}

export type Ability = {
  name: string,
  level: number,
  type: 'ability' | 'spell' | 'weaponskill',
  iconPath: string,
  recast: number,
  charges: number,
  range: number | null,
  radius: number | null,
  description: string,
  requiresBuff?: string[], // applies if a buff is needed to use an ability
  replaces?: string,
  effects: {
    target: 'self' | 'single' | 'aoe',
    includesSelf: boolean,
    prerequisites?: { // applies if a buff is needed to activate an ability effect
      buffs: string[],
      allAnyOrNone: 'all' | 'any' | 'none' // all means all buffs need to be present, any means any of the buffs will activate the effect, and none means that the effect will only activate with none of the buffs present
    }
    healing?: {
      potency: number
    },
    regen?: {
      potency: number,
      duration: number
    },
    barrier?: {
      potency?: number,
      maxHpFraction?: number,
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
    convertsDamage?: {
      duration: number
    }
    healingMagicPotencyIncrease?: {
      amount: number,
      duration: number
    }
    block?: {
      duration: number
    },
    parry?: {
      amount: number,
      duration: number
    },
    invulnerability?: {
      duration: number
    },
    synastry?: {
      amount: number,
      duration: number
    },
    excog?: { // restores hp by potency when hp falls below 50%
      potency: number,
      duration: number
    },
    cover?: { // take damage for another party member
      duration: number
    },
    selfHealForOtherTarget?: { // handles PLD's clemency self-heal
      fraction: number
    }
    grantsBuff?: {
      name: string,
      duration: number
    },
    compiledDamageHeal?: {
      amount: number
    }
    exclusiveWith?: {
      job: JobString,
      ability: string
    }[],
  }[]
}

// used for calculating ability effects on party/players
export type AbilityEffects = {
  // store heals in array, specify who does which heal
  healing: {
    potency: number,
    source: string
  }[],
  regen: {
    potency: number,
    duration: number,
    source: string
  }[],
  barrier: {
    potency?: number,
    maxHpFraction?: number
  }[],
  damageReduction: {
    active: boolean,
    amount: number
  },
  physicalDamageReduction: {
    active: boolean,
    amount: number
  },
  magicalDamageReduction: {
    active: boolean,
    amount: number
  },
  maxHpIncrease: {
    active: boolean,
    amount: number
  },
  hpRecoveryIncrease: {
    active: boolean,
    amount: number,
  },
  convertsDamage: {
    active: boolean
    duration: number
  }
  healingMagicPotencyIncrease: {
    active: boolean,
    amount: number,
  }
  block: {
    active: boolean,
    duration: number
  },
  parry: {
    active: boolean,
    amount: number,
    duration: number
  },
  invulnerability: {
    active: boolean,
    duration: number
  },
  synastry: {
    active: boolean
    amount: number,
    duration: number
  },
  excog: { // restores hp by potency when hp falls below 50%
    active: boolean,
    potency: number,
  },
  cover: { // take damage for another party member
    active: boolean
  },
  selfHealForOtherTarget: { // handles PLD's clemency self-heal
    active: boolean,
    fraction: number
  }
  compiledDamageHeal: {
    active: boolean,
    amount: number
  }
}

// use to initialize effects object
export const initialAbilityEffects: AbilityEffects = {
  // store heals in array, specify who does which heal
  healing: [],
  regen: [],
  barrier: [],
  damageReduction: {
    active: false,
    amount: 0
  },
  physicalDamageReduction: {
    active: false,
    amount: 0
  },
  magicalDamageReduction: {
    active: false,
    amount: 0
  },
  maxHpIncrease: {
    active: false,
    amount: 0
  },
  hpRecoveryIncrease: {
    active: false,
    amount: 0,
  },
  convertsDamage: {
    active: false,
    duration: 0
  },
  healingMagicPotencyIncrease: {
    active: false,
    amount: 0,
  },
  block: {
    active: false,
    duration: 0
  },
  parry: {
    active:false,
    amount: 0,
    duration: 0
  },
  invulnerability: {
    active: false,
    duration: 0
  },
  synastry: {
    active: false,
    amount: 0,
    duration: 0
  },
  excog: { // restores hp by potency when hp falls below 50%
    active: false,
    potency: 0,
  },
  cover: { // take damage for another party member
    active: false
  },
  selfHealForOtherTarget: { // handles PLD's clemency self-heal
    active: false,
    fraction: 0
  },
  compiledDamageHeal: {
    active: false,
    amount: 0
  }
}

export const testAbility: Ability = {
  name: 'Test Ability',
  type: 'spell',
  level: 1,
  iconPath: 'PLACEHOLDER',
  recast: 10,
  charges: 1,
  range: null,
  radius: null,
  description: 'Test ability for use in debugging',
  effects: []
}