import { Ability } from "../../types"
import meleeAbilities from "./melee";
const basePath = '/05_MNK/'

const mnkAbilities: {[key: string]: Ability} = {
  'Mantra': {
    name: 'Mantra',
    level: 42,
    type: 'ability',
    iconPath: 'mantra.png',
    recast: 90,
    charges: 1,
    range: null,
    radius: 15,
    description: `Increases HP recovery via healing actions by 10% for self and nearby party members.
    Duration: 15s`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        hpRecoveryIncrease: {
          amount: 0.1,
          duration: 15
        }
      }
    ]
  },
  'Riddle of Earth': {
    name: 'Riddle of Earth',
    level: 64,
    type: 'ability',
    iconPath: 'riddle_of_earth.png',
    recast: 30,
    charges: 3,
    range: null,
    radius: null,
    description: `Grants 3 stacks of Riddle of Earth, each stack reducing damage taken by 20%.
    Duration: 10s
    Maximum Charges: 3
    Effect ends when time expires or upon execution of three weaponskills.`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        damageReduction: {
          amount: 0.2,
          duration: 10
        }
      }
    ]
  },
};

for (const ability in mnkAbilities) {
  mnkAbilities[ability].iconPath = basePath + mnkAbilities[ability].iconPath;
}

Object.assign(mnkAbilities, meleeAbilities);

export default mnkAbilities;