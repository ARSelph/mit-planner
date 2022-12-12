import { Ability } from "../../types"
import casterAbilities from "./caster";
const basePath = '/15_RDM/'

const rdmAbilities: {[key: string]: Ability} = {
  
};

for (const ability in rdmAbilities) {
  rdmAbilities[ability].iconPath = basePath + rdmAbilities[ability].iconPath;
}

Object.assign(rdmAbilities, casterAbilities);

export default rdmAbilities;