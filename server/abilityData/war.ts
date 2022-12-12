import { Ability } from "../../types"
import tankAbilities from "./tank";

const warAbilities: {[key: string]: Ability} = {
  ...tankAbilities,
  
};

export default warAbilities;