import { Ability } from "../../types"
import healerAbilities from "./healer";
const basePath = '/16_WHM/'

const whmAbilities: {[key: string]: Ability} = {
  
};

for (const ability in whmAbilities) {
  whmAbilities[ability].iconPath = basePath + whmAbilities[ability].iconPath;
}

Object.assign(whmAbilities, healerAbilities);

export default whmAbilities;