import { Ability } from "../../types"
const basePath = '/01_PLD/TankRollAction/';

const tankAbilities: {[key: string]: Ability} = {

};

for (const ability in tankAbilities) {
  tankAbilities[ability].iconPath = basePath + tankAbilities[ability].iconPath;
}

export default tankAbilities;