import { Ability } from "../../types"
import tankAbilities from "./tank";
const basePath = '/02_WAR/'

const warAbilities: {[key: string]: Ability} = {
  
};

for (const ability in warAbilities) {
  warAbilities[ability].iconPath = basePath + warAbilities[ability].iconPath;
}

Object.assign(warAbilities, tankAbilities);

export default warAbilities;