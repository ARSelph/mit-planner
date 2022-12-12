import { Ability } from "../../types"
import healerAbilities from "./healer";

const whmAbilities: {[key: string]: Ability} = {
  ...healerAbilities,
  
};

export default whmAbilities;