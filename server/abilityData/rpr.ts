import { Ability } from "../../types"
import meleeAbilities from "./melee";
const basePath = '/08_RPR/'

const rprAbilities: {[key: string]: Ability} = {
  'Arcane Crest': {
    name: 'Arcane Crest',
    level: 40,
    type: 'ability',
    iconPath: 'arcane_crest.png',
    recast: 30,
    charges: 1,
    range: null,
    radius: 15,
    description: `Grants Crest of Time Borrowed to self, creating a barrier that nullifies damage totaling up to 10% of maximum HP.
    Duration: 5s
    Grants Crest of Time Returned to self and nearby party members within a radius of 15 yalms when barrier is completely absorbed.
    Crest of Time Returned Effect: Gradually restores HP
    Cure Potency: 50
    Duration: 15s`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        barrier: {
          maxHpFraction: 0.1,
          duration: 5
        }
      },
      {
        target: 'aoe',
        includesSelf: true,
        regen: {
          potency: 50,
          duration: 15
        }
      }
    ]
  },
};

for (const ability in rprAbilities) {
  rprAbilities[ability].iconPath = basePath + rprAbilities[ability].iconPath;
}

Object.assign(rprAbilities, meleeAbilities);

export default rprAbilities;