import { Ability } from "../../types"
import meleeAbilities from "./melee";
const basePath = '/08_RPR/'

const rprAbilities: {[key: string]: Ability} = {
  
};

for (const ability in rprAbilities) {
  rprAbilities[ability].iconPath = basePath + rprAbilities[ability].iconPath;
}

Object.assign(rprAbilities, meleeAbilities);

export default rprAbilities;