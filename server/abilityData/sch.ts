import { Ability } from "../../types"
import healerAbilities from "./healer";
const basePath = '/17_SCH/'

const schAbilities: {[key: string]: Ability} = {
  
};

for (const ability in schAbilities) {
  schAbilities[ability].iconPath = basePath + schAbilities[ability].iconPath;
}

Object.assign(schAbilities, healerAbilities);

export default schAbilities;