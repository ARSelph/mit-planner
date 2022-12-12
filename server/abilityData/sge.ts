import { Ability } from "../../types"
import healerAbilities from "./healer";

const sgeAbilities: {[key: string]: Ability} = {
  ...healerAbilities,
  
};

export default sgeAbilities;