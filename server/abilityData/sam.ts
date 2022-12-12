import { Ability } from "../../types"
import meleeAbilities from "./melee";
const basePath = '/07_SAM/'

const samAbilities: {[key: string]: Ability} = {
  
};

for (const ability in samAbilities) {
  samAbilities[ability].iconPath = basePath + samAbilities[ability].iconPath;
}

Object.assign(samAbilities, meleeAbilities);

export default samAbilities;