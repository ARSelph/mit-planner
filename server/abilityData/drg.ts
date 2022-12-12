import { Ability } from "../../types"
import meleeAbilities from "./melee";

const drgAbilities: {[key: string]: Ability} = {
  ...meleeAbilities,
  
};

export default drgAbilities;