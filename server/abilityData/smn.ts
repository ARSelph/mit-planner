import { Ability } from "../../types"
import casterAbilities from "./caster";

const smnAbilities: {[key: string]: Ability} = {
  ...casterAbilities,
  
};

export default smnAbilities;