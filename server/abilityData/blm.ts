import { Ability } from "../../types"
import casterAbilities from "./caster";
const basePath = '/13_BLM/'

const blmAbilities: {[key: string]: Ability} = {
  
};

for (const ability in blmAbilities) {
  blmAbilities[ability].iconPath = basePath + blmAbilities[ability].iconPath;
}

Object.assign(blmAbilities, casterAbilities);

export default blmAbilities;