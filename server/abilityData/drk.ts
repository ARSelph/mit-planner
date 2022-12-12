import { Ability } from "../../types"
import tankAbilities from "./tank";

const drkAbilities: {[key: string]: Ability} = {
  ...tankAbilities,
  
};

export default drkAbilities;