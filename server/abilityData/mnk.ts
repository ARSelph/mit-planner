import { Ability } from "../../types"
import meleeAbilities from "./melee";
const basePath = '/05_MNK/'

const mnkAbilities: {[key: string]: Ability} = {
  
};

for (const ability in mnkAbilities) {
  mnkAbilities[ability].iconPath = basePath + mnkAbilities[ability].iconPath;
}

Object.assign(mnkAbilities, meleeAbilities);

export default mnkAbilities;