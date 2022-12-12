import { Ability } from "../../types"
import meleeAbilities from "./melee";

const samAbilities: {[key: string]: Ability} = {
  ...meleeAbilities,
  
};

export default samAbilities;