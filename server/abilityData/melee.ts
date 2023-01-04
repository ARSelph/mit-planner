import { Ability } from "../../types"
const basePath = '/05_MNK/MeleeRollAction/'

const meleeAbilities: {[key: string]: Ability} = {
  'Second Wind': {
    name: 'Second Wind',
    level: 8,
    type: 'ability',
    iconPath: 'second_wind.png',
    recast: 120,
    charges: 1,
    range: null,
    radius: null,
    description: `Instantly restores own HP.
    Cure Potency: 500`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        healing: {
          potency: 500
        }
      }
    ]
  },
  'Bloodbath': {
    name: 'Bloodbath',
    level: 12,
    type: 'ability',
    iconPath: 'bloodbath.png',
    recast: 90,
    charges: 1,
    range: null,
    radius: null,
    description: `Converts a portion of physical damage dealt into HP.
    Duration: 20s`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        convertsDamage: {
          duration: 20
        }
      }
    ]
  },
  'Feint': {
    name: 'Feint',
    level: 22,
    type: 'ability',
    iconPath: 'feint.png',
    recast: 90,
    charges: 1,
    range: null,
    radius: null,
    description: `Lowers target's physical damage dealt by 10% and magic damage dealt by 5%.
    Duration: 10s`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        physicalDamageReduction: {
          amount: 0.1,
          duration: 10
        },
        magicalDamageReduction: {
          amount: 0.05,
          duration: 10
        }
      }
    ]
  },
};

for (const ability in meleeAbilities) {
  meleeAbilities[ability].iconPath = basePath + meleeAbilities[ability].iconPath;
}

export default meleeAbilities;