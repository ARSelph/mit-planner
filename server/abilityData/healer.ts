import { Ability } from "../../types"
const basePath = '/16_WHM/HealerRollAction/'

const healerAbilities: {[key: string]: Ability} = {
  
};

for (const ability in healerAbilities) {
  healerAbilities[ability].iconPath = basePath + healerAbilities[ability].iconPath;
}

export default healerAbilities;