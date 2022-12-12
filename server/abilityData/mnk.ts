import { Ability } from "../../types"
import meleeAbilities from "./melee";

const mnkAbilities: {[key: string]: Ability} = {
  ...meleeAbilities,
  
};

export default mnkAbilities;