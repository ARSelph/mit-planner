import { Ability } from "../../types"
import tankAbilities from "./tank";
const basePath = '/01_PLD/'

const pldAbilities: {[key: string]: Ability} = {
  
};

for (const ability in pldAbilities) {
  pldAbilities[ability].iconPath = basePath + pldAbilities[ability].iconPath;
}

Object.assign(pldAbilities, tankAbilities);

export default pldAbilities;