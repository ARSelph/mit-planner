import { Ability } from "../../types"
import casterAbilities from "./caster";

const bluAbilities: {[key: string]: Ability} = {
  ...casterAbilities,
  
};

export default bluAbilities;