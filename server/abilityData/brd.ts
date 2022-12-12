import { Ability } from "../../types"
import rangedAbilities from "./ranged";

const brdAbilities: {[key: string]: Ability} = {
  ...rangedAbilities,
  'Troubador': {
    name: 'Troubador',
    type: 'ability',
    iconPath: '',
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
  }
};

export default brdAbilities;