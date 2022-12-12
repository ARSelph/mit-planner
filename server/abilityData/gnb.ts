import { Ability } from "../../types"
import tankAbilities from "./tank";

const gnbAbilities: {[key: string]: Ability} = {
  ...tankAbilities,
  
};

export default gnbAbilities;