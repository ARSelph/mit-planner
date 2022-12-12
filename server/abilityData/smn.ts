import { Ability } from "../../types"
import casterAbilities from "./caster";
const basePath = '/14_SMN/'

const smnAbilities: {[key: string]: Ability} = {
  
};

for (const ability in smnAbilities) {
  smnAbilities[ability].iconPath = basePath + smnAbilities[ability].iconPath;
}

Object.assign(smnAbilities, casterAbilities);

export default smnAbilities;