import { Ability } from "../../types"
import casterAbilities from "./caster";
const basePath = '/20_BLU/'

const bluAbilities: {[key: string]: Ability} = {
  
};

for (const ability in bluAbilities) {
  bluAbilities[ability].iconPath = basePath + bluAbilities[ability].iconPath;
}

Object.assign(bluAbilities, casterAbilities);

export default bluAbilities;