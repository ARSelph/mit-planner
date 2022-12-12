import { Ability } from "../../types";
import rangedAbilities from "./ranged";
const basePath = '/11_MCH/'

const mchAbilities: {[key: string]: Ability} = {
  
};

for (const ability in mchAbilities) {
  mchAbilities[ability].iconPath = basePath + mchAbilities[ability].iconPath;
}

Object.assign(mchAbilities, rangedAbilities);

export default mchAbilities;