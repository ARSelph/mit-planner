import { Ability } from "../../types"
import rangedAbilities from "./ranged";

const mchAbilities: {[key: string]: Ability} = {
  ...rangedAbilities,
  
};

export default mchAbilities;