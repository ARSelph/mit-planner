import { Ability } from "../../types";
import rangedAbilities from "./ranged";
const basePath = '/11_MCH/'

const mchAbilities: {[key: string]: Ability} = {
  'Tactician': {
    name: 'Tactician',
    level: 56,
    type: 'ability',
    iconPath: 'tactician.png',
    recast: 90,
    charges: 1,
    range: null,
    radius: 20,
    description: `Reduces damage taken by self and nearby party members by 10%.
    Duration: 15s
    Effect cannot be stacked with bard's Troubadour or dancer's Shield Samba.`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        damageReduction: {
          amount: 0.1,
          duration: 15
        },
        exclusiveWith: [
          {
            job: 'brd',
            ability: 'Troubador'
          },
          {
            job: 'dnc',
            ability: 'Shield Samba'
          }
        ]
      }
    ]
  },
};

for (const ability in mchAbilities) {
  mchAbilities[ability].iconPath = basePath + mchAbilities[ability].iconPath;
}

Object.assign(mchAbilities, rangedAbilities);

export default mchAbilities;