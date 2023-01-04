import { Ability } from "../../types"
const basePath = '/13_BLM/MagicalRangedRollActions/'

const casterAbilities: {[key: string]: Ability} = {
  'Addle': {
    name: 'Addle',
    level: 8,
    type: 'ability',
    iconPath: 'addle.png',
    recast: 90,
    charges: 1,
    range: 25,
    radius: null,
    description: `Lowers target's physical damage dealt by 5% and magic damage dealt by 10%.
    Duration: 10s`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        magicalDamageReduction: {
          amount: 0.1,
          duration: 10
        },
        physicalDamageReduction: {
          amount: 0.05,
          duration: 10
        }
      }
    ]
  },
};

for (const ability in casterAbilities) {
  casterAbilities[ability].iconPath = basePath + casterAbilities[ability].iconPath;
}

export default casterAbilities;