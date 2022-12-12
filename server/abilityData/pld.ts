import { Ability } from "../../types"
import tankAbilities from "./tank";

const pldAbilities: {[key: string]: Ability} = {
  ...tankAbilities,
  
};

export default pldAbilities;