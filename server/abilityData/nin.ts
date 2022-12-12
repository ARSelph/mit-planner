import { Ability } from "../../types"
import meleeAbilities from "./melee";

const ninAbilities: {[key: string]: Ability} = {
  ...meleeAbilities,
  
};

export default ninAbilities;