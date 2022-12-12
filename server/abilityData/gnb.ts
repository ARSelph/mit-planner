import { Ability } from "../../types"
import tankAbilities from "./tank";
const basePath = '/04_GNB/'

const gnbAbilities: {[key: string]: Ability} = {
  
};

for (const ability in gnbAbilities) {
  gnbAbilities[ability].iconPath = basePath + gnbAbilities[ability].iconPath;
}

Object.assign(gnbAbilities, tankAbilities);

export default gnbAbilities;