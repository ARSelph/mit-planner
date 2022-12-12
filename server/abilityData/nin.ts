import { Ability } from "../../types"
import meleeAbilities from "./melee";
const basePath = '/09_NIN/'


const ninAbilities: {[key: string]: Ability} = {
  
};

for (const ability in ninAbilities) {
  ninAbilities[ability].iconPath = basePath + ninAbilities[ability].iconPath;
}

Object.assign(ninAbilities, meleeAbilities);

export default ninAbilities;