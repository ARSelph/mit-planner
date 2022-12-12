import { Ability } from "../../types"
import meleeAbilities from "./melee";
const basePath = '/06_DRG/'

const drgAbilities: {[key: string]: Ability} = {
  
};

for (const ability in drgAbilities) {
  drgAbilities[ability].iconPath = basePath + drgAbilities[ability].iconPath;
}

Object.assign(drgAbilities, meleeAbilities);

export default drgAbilities;