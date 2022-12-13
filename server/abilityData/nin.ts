import { Ability } from "../../types"
import meleeAbilities from "./melee";
const basePath = '/09_NIN/'

const ninAbilities: {[key: string]: Ability} = {
  'Shade Shift': {
    name: 'Shade Shift',
    level: 2,
    type: 'ability',
    iconPath: 'shade_shift.png',
    recast: 120,
    charges: 1,
    range: null,
    radius: null,
    description: `Create shadows that nullify damage up to 20% of maximum HP.
    Duration: 20s`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        barrier: {
          maxHpFraction: 0.2,
          duration: 20
        }
      }
    ]
  },
};

for (const ability in ninAbilities) {
  ninAbilities[ability].iconPath = basePath + ninAbilities[ability].iconPath;
}

Object.assign(ninAbilities, meleeAbilities);

export default ninAbilities;