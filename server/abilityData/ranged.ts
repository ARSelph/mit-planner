import { Ability } from "../../types"
const basePath = '/10_BRD/PhysicalRangedRollActions/'

const rangedAbilities: {[key: string]: Ability} = {
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
};

export default rangedAbilities;