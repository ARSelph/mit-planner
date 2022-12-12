import { Ability } from "../../types"
import meleeAbilities from "./melee";

const rprAbilities: {[key: string]: Ability} = {
  ...meleeAbilities,
  
};

export default rprAbilities;