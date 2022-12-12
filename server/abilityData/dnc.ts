import { Ability } from "../../types"
import rangedAbilities from "./ranged";

const dncAbilities: {[key: string]: Ability} = {
  ...rangedAbilities,
  'Shield Samba': {
    name: 'Shield Samba',
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

export default dncAbilities;