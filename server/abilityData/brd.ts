import { Ability } from "../../types"
import rangedAbilities from "./ranged";
const basePath = '/10_BRD/'

const brdAbilities: {[key: string]: Ability} = {
  'Troubador': {
    name: 'Troubador',
    level: 62,
    type: 'ability',
    iconPath: 'troubador.png',
    recast: 90,
    charges: 1,
    range: null,
    radius: 20,
    description: `Reduces damage taken by self and nearby party members by 10%.
    Duration: 15s
    Effect cannot be stacked with machinist's Tactician or dancer's Shield Samba.`,
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
            job: 'mch',
            ability: 'Tactician'
          },
          {
            job: 'dnc',
            ability: 'Shield Samba'
          }
        ]
      }
    ]
  },
  'Nature\'s Minne': {
    name: 'Nature\'s Minne',
    level: 66,
    type: 'ability',
    iconPath: 'nature\'s_minne.png',
    recast: 90,
    charges: 1,
    range: 30,
    radius: null,
    description: `Increases HP recovery via healing actions for a party member or self by 20%.
    Duration: 15s`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        hpRecoveryIncrease: {
          amount: 0.2,
          duration: 15
        }
      }
    ]
  }
};

for (const ability in brdAbilities) {
  brdAbilities[ability].iconPath = basePath + brdAbilities[ability].iconPath;
}

Object.assign(brdAbilities, rangedAbilities);

export default brdAbilities;