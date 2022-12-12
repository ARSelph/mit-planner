import { Ability } from "../../types"
import casterAbilities from "./caster";

const rdmAbilities: {[key: string]: Ability} = {
  ...casterAbilities,
  
};

export default rdmAbilities;