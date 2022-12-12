import { Ability } from "../../types"

const casterAbilities: {[key: string]: Ability} = {
  'Addle': {
    name: 'Addle',
    type: 'ability',
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

export default casterAbilities;