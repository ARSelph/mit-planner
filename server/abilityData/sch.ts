import { Ability } from "../../types"
import healerAbilities from "./healer";
const basePath = '/17_SCH/'

const schAbilities: {[key: string]: Ability} = {
  'Physick': {
    name: 'Physick',
    level: 4,
    type: 'spell',
    iconPath: 'physick.png',
    recast: 2.5,
    charges: 1,
    range: 30,
    radius: null,
    description: `Restores target's HP.
    Cure Potency: 450`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        healing: {
          potency: 450
        }
      }
    ]
  },
  'Whispering Dawn': {
    name: 'Whispering Dawn',
    level: 20,
    type: 'ability',
    iconPath: 'whispering_dawn.png',
    recast: 60,
    charges: 1,
    range: null,
    radius: null,
    description: `Orders faerie to execute Whispering Dawn. If Seraph is summoned, orders her to execute Angel's Whisper.
    Whispering Dawn/Angel's Whisper Effect: Gradually restores the HP of all nearby party members
    Cure Potency: 80
    Duration: 21s`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        regen: {
          potency: 80,
          duration: 21
        }
      }
    ]
  },
  'Adloquium': {
    name: 'Adloquium',
    level: 30,
    type: 'spell',
    iconPath: 'adloquium.png',
    recast: 2.5,
    charges: 1,
    range: 30,
    radius: null,
    description: `Restores target's HP.
    Cure Potency: 300
    Additional Effect: Grants Galvanize to target, nullifying damage equaling 180% of the amount of HP restored. When critical HP is restored, also grants Catalyze, nullifying damage equaling 180% the amount of HP restored.
    Duration: 30s
    Effect cannot be stacked with certain sage barrier effects.`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        healing: {
          potency: 300
        },
        barrier: {
          potency: 540,
          duration: 30
        }
      }
    ]
  },
  // continue from adlo
};

for (const ability in schAbilities) {
  schAbilities[ability].iconPath = basePath + schAbilities[ability].iconPath;
}

Object.assign(schAbilities, healerAbilities);

export default schAbilities;