import { Ability } from "../../types"
import tankAbilities from "./tank";
const basePath = '/03_DRK/'

const drkAbilities: {[key: string]: Ability} = {
  // 'Shadow Wall': {
  //   name: 'Shadow Wall',
  //   type: 'ability',
  //   iconPath: 'shadow_wall.png',
  //   recast: 120,
  //   charges: 1,
  //   range: null,
  //   radius: null,
  //   description: `Reduces damage taken by 30%.
  //   Duration: 15s`,
  //   effects: [
  //     {
  //       target: 'self',
  //       includesSelf: true,
  //       damageReduction: {
  //         amount: 0.3,
  //         duration: 15
  //       }
  //     }
  //   ]
  // },
};

for (const ability in drkAbilities) {
  drkAbilities[ability].iconPath = basePath + drkAbilities[ability].iconPath;
}

Object.assign(drkAbilities, tankAbilities);

export default drkAbilities;