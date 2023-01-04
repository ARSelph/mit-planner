import { Ability } from "../../types"
import casterAbilities from "./caster";
const basePath = '/15_RDM/'

const rdmAbilities: {[key: string]: Ability} = {
  'Magick Barrier': {
    name: 'Magick Barrier',
    level: 86,
    type: 'ability',
    iconPath: 'magick_barrier.png',
    recast: 120,
    charges: 1,
    range: null,
    radius: 15,
    description: `Reduces magic damage taken by self and nearby party members by 10%, while increasing HP recovered by healing actions by 5%.
    Duration: 10s`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        damageReduction: {
          amount: 0.1,
          duration: 10
        },
        hpRecoveryIncrease: {
          amount: 0.5,
          duration: 10
        }
      }
    ]
  },
};

for (const ability in rdmAbilities) {
  rdmAbilities[ability].iconPath = basePath + rdmAbilities[ability].iconPath;
}

Object.assign(rdmAbilities, casterAbilities);

export default rdmAbilities;