import { Ability } from "../../types"
import rangedAbilities from "./ranged";
const basePath = '/12_DNC/'

const dncAbilities: {[key: string]: Ability} = {
  'Shield Samba': {
    name: 'Shield Samba',
    level: 56,
    type: 'ability',
    iconPath: '',
    recast: 90,
    range: null,
    radius: 20,
    charges: 1,
    description: `Reduces damage taken by self and nearby party members by 10%.
    Duration: 15s
    Effect cannot be stacked with bard's Troubadour or machinist's Tactician.`,
    effects: [
      {
        target: "aoe",
        includesSelf: true,
        damageReduction: {
          amount: 0.1,
          duration: 15
        },
        exclusiveWith:[
          {
            job: 'brd',
            ability: 'Troubador'
          },
          {
            job: 'mch',
            ability: 'Tactician'
          }
        ] 
      }
    ]
  }
};

for (const ability in dncAbilities) {
  dncAbilities[ability].iconPath = basePath + dncAbilities[ability].iconPath;
}

Object.assign(dncAbilities, rangedAbilities);

export default dncAbilities;