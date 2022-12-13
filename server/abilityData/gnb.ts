import { Ability } from "../../types"
import tankAbilities from "./tank";
const basePath = '/04_GNB/'

const gnbAbilities: {[key: string]: Ability} = {
  'Camouflage': {
    name: 'Camouflage',
    level: 6,
    type: 'ability',
    iconPath: 'camouflage.png',
    recast: 90,
    charges: 1,
    range: null,
    radius: null,
    description: `Increases parry rate by 50% while reducing damage taken by 10%.
    Duration: 20s`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        damageReduction: {
          amount: 0.1,
          duration: 20
        },
        parry: {
          amount: 0.5,
          duration: 20
        }
      }
    ]
  },
  'Nebula': {
    name: 'Nebula',
    level: 38,
    type: 'ability',
    iconPath: 'nebula.png',
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
  'Aurora': {
    name: 'Aurora',
    level: 45,
    type: 'ability',
    iconPath: 'aurora.png',
    recast: 60,
    charges: 2,
    range: null,
    radius: null,
    description: `Grants Regen to target.
    Cure Potency: 200
    Duration: 18s
    Maximum Charges: 2`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        regen: {
          potency: 200,
          duration: 18
        }
      }
    ]
  },
  'Superbolide': {
    name: 'Superbolide',
    level: 50,
    type: 'ability',
    iconPath: 'superbolide.png',
    recast: 360,
    charges: 1,
    range: null,
    radius: null,
    description: `Reduces HP to 1 and renders you impervious to most attacks.
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
  'Heart of Light': {
    name: 'Heart of Light',
    level: 64,
    type: 'ability',
    iconPath: 'heart_of_light',
    recast: 90,
    charges: 1,
    range: null,
    radius: 15,
    description: `Reduces magic damage taken by self and nearby party members by 10%.
    Duration: 15s`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        damageReduction: {
          amount: 0.1,
          duration: 15
        }
      }
    ]
  },
  'Heart of Stone': {
    name: 'Heart of Stone',
    level: 68,
    type: 'ability',
    iconPath: 'heart_of_stone.png',
    recast: 68,
    charges: 1,
    range: 30,
    radius: null,
    description: `Reduces damage taken by a party member or self by 15%.
    Duration: 7s
    Additional Effect: When targeting a party member while under the effect of Brutal Shell, that effect is also granted to the target
    Duration: 30s`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        damageReduction: {
          amount: 0.15,
          duration: 7
        }
      }
    ]
  },
  'Heart of Corundum': {
    name: 'Heart of Corundum',
    level: 82,
    type: 'ability',
    iconPath: 'heart_of_corundum',
    recast: 25,
    charges: 1,
    range: null,
    radius: null,
    description: `Reduces damage taken by a party member or self by 15%.
    Duration: 8s
    Additional Effect: When targeting a party member while under the effect of Brutal Shell, that effect is also granted to the target
    Duration: 30s
    Additional Effect: Grants Clarity of Corundum to target
    Clarity of Corundum Effect: Reduces damage taken by 15%
    Duration: 4s
    Additional Effect: Grants Catharsis of Corundum to target
    Catharsis of Corundum Effect: Restores HP when HP falls below 50% or upon effect duration expiration
    Cure Potency: 900
    Duration: 20s`,
    replaces: 'Heart of Stone',
    effects: [
      {
        target: 'single',
        includesSelf: true,
        damageReduction: {
          amount: 0.15,
          duration: 8
        },
        excog: {
          potency: 900,
          duration: 20
        }
      },
      {
        target: 'single',
        includesSelf: true,
        damageReduction: {
          amount: 0.15,
          duration: 4
        }
      },
    ]
  },
};

for (const ability in gnbAbilities) {
  gnbAbilities[ability].iconPath = basePath + gnbAbilities[ability].iconPath;
}

Object.assign(gnbAbilities, tankAbilities);

export default gnbAbilities;