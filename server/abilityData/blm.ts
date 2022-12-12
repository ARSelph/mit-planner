import { Ability } from "../../types"
import casterAbilities from "./caster";

const blmAbilities: {[key: string]: Ability} = {
  ...casterAbilities,
  
};

export default blmAbilities;