import { Ability } from "../../types"
import healerAbilities from "./healer";
const basePath = '/19_SGE/'

const sgeAbilities: {[key: string]: Ability} = {
  
};

for (const ability in sgeAbilities) {
  sgeAbilities[ability].iconPath = basePath + sgeAbilities[ability].iconPath;
}

Object.assign(sgeAbilities, healerAbilities);

export default sgeAbilities;