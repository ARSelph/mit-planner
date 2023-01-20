import { Ability } from "../../types"
import tankAbilities from "./tank";
const basePath = '/01_PLD/'

const pldAbilities: {[key: string]: Ability} = {
  'Sheltron': {
    name: 'Sheltron',
    level: 35,
    type: 'ability',
    iconPath: 'sheltron.png',
    recast: 5,
    charges: 1,
    range: null,
    radius: null,
    description: `Reduces damage taken by 15%.
    Duration: 6s
    Oath Gauge Cost: 50`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        damageReduction: {
          duration: 6,
          amount: 0.15
        }
      }
    ]
  },
  'Sentinel': {
    name: 'Sentinel',
    level: 38,
    type: 'ability',
    iconPath: 'sentinel.png',
    recast: 120,
    charges: 1,
    range: null,
    radius: null,
    description: `Reduces damage taken by 30%.
    Duration: 15s`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        damageReduction: {
          amount: 0.3,
          duration: 15
        }
      }
    ]
  },
  'Cover': {
    name: 'Cover',
    level: 45,
    type: 'ability',
    iconPath: 'cover.png',
    recast: 120,
    charges: 1,
    range: 10,
    radius: null,
    description: `Take all damage intended for another party member as long as said member remains within 10 yalms.
    Does not activate with certain attacks.
    Duration: 12s
    Oath Gauge Cost: 50`,
    effects: [
      {
        target: 'single',
        includesSelf: false,
        cover: {
          duration: 12
        }
      }
    ]
  },
  'Hallowed Ground': {
    name: 'Hallowed Ground',
    level: 50,
    type: 'ability',
    iconPath: 'hallowed_ground.png',
    recast: 420,
    charges: 1,
    range: null,
    radius: null,
    description: `Renders you impervious to most attacks.
    Duration: 10s`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        invulnerability: {
          duration: 10
        }
      }
    ]
  },
  'Bulwark': {
    name: 'Bulwark',
    level: 52,
    type: 'ability',
    iconPath: 'bulwark.png',
    recast: 90,
    charges: 1,
    range: null,
    radius: null,
    description: `Block incoming attacks.
    Duration: 10s`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        block: {
          duration: 10
        }
      }
    ]
  },
  'Divine Veil': {
    name: 'Divine Veil',
    level: 56,
    type: 'ability',
    iconPath: 'divine_veil.png',
    recast: 90,
    charges: 1,
    range: null,
    radius: null,
    description: `Creates a barrier around self and all party members near you that absorbs damage equivalent to 10% of your maximum HP.
    Duration: 30s
    Additional Effect: Restores target's HP
    Cure Potency: 400`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        barrier: {
          maxHpFraction: 0.1,
          duration: 30
        },
        healing: {
          potency: 400
        }
      }
    ]
  },
  'Clemency': {
    name: 'Clemency',
    level: 58,
    type: 'spell',
    iconPath: 'clemency.png',
    recast: 2.5,
    charges: 1,
    range: null,
    radius: null,
    description: `Restores target's HP.
    Cure Potency: 1,000
    Additional Effect: Restores to self 50% of HP restored to target if target is a party member`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        healing: {
          potency: 1000
        },
        selfHealForOtherTarget: {
          fraction: 0.5
        }
      }
    ]
  },
  'Intervention': {
    name: 'Intervention',
    level: 62,
    type: 'ability',
    iconPath: 'intervention.png',
    recast: 10,
    charges: 1,
    range: 30,
    radius: null,
    description: `Reduces target party member's damage taken by 10%.
    Duration: 8s
    Additional Effect: Increases damage reduction by an additional 10% if Rampart or Sentinel are active
    Additional Effect: Grants Knight's Resolve to target
    Knight's Resolve Effect: Reduces damage taken by 10%
    Duration: 4s
    Additional Effect: Grants Knight's Benediction to target
    Knight's Benediction Effect: Gradually restores HP
    Cure Potency: 250
    Duration: 12s
    Oath Gauge Cost: 50`,
    effects: [
      {
        target: 'single',
        includesSelf: false,
        prerequisites: {
          buffs: ['Rampart', 'Sentinel'],
          allAnyOrNone: 'none'
        },
        damageReduction: {
          amount: 0.1,
          duration: 8
        }
      },
      {
        target: 'single',
        includesSelf: false,
        prerequisites: {
          buffs: ['Rampart', 'Sentinel'],
          allAnyOrNone: 'any'
        },
        damageReduction: {
          amount: 0.2,
          duration: 8
        }
      },
      {
        target: 'single',
        includesSelf: false,
        damageReduction: {
          amount: 0.1,
          duration: 4
        }
      },
      {
        target: 'single',
        includesSelf: false,
        regen: {
          potency: 250,
          duration: 12
        }
      }
    ]
  },
  'Passage of Arms': {
    name: 'Passage of Arms',
    level: 70,
    type: 'ability',
    iconPath: 'passage_of_arms.png',
    recast: 120,
    charges: 1,
    range: null,
    radius: 8,
    description: `Increases block rate to 100% and creates a designated area in a cone behind you in which party members will only suffer 85% of all damage inflicted.
    Duration: 18s
    Effect ends upon using another action or moving (including facing a different direction).
    Cancels auto-attack upon execution.`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        block: {
          duration: 18
        }
      },
      {
        target: 'aoe',
        includesSelf: false,
        damageReduction: {
          amount: 0.15,
          duration: 18
        }
      }
    ]
  },
  'Holy Sheltron': {
    name: 'Holy Sheltron',
    level: 82,
    replaces: 'Sheltron',
    type: 'ability',
    iconPath: 'holy_sheltron.png',
    recast: 5,
    charges: 1,
    range: null,
    radius: null,
    description: `Reduces damage taken by 15%.
    Duration: 8s
    Additional Effect: Grants Knight's Resolve
    Knight's Resolve Effect: Reduces damage taken by 15%
    Duration: 4s
    Additional Effect: Grants Knight's Benediction
    Knight's Benediction Effect: Gradually restores HP
    Cure Potency: 250
    Duration: 12s
    Oath Gauge Cost: 50`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        damageReduction: {
          amount: 0.15,
          duration: 8
        }
      },
      {
        target: 'self',
        includesSelf: true,
        damageReduction: {
          amount: 0.15,
          duration: 4
        }
      },
      {
        target: 'self',
        includesSelf: true,
        regen: {
          potency: 250,
          duration: 12
        }
      }
    ]
  },
};

for (const ability in pldAbilities) {
  pldAbilities[ability].iconPath = basePath + pldAbilities[ability].iconPath;
}

Object.assign(pldAbilities, tankAbilities);

export default pldAbilities;