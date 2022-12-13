import { Ability } from "../../types"
import healerAbilities from "./healer";
const basePath = '/16_WHM/'

const whmAbilities: {[key: string]: Ability} = {
  '': {
    name: '',
    level: 0,
    type: 'ability',
    iconPath: '',
    recast: 0,
    charges: 1,
    range: null,
    radius: null,
    description: ``,
    effects: [
      {
        target: 'self',
        includesSelf: true,
      }
    ]
  },
};

for (const ability in whmAbilities) {
  whmAbilities[ability].iconPath = basePath + whmAbilities[ability].iconPath;
}

Object.assign(whmAbilities, healerAbilities);

export default whmAbilities;