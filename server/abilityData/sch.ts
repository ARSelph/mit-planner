import { Ability } from "../../types"
import healerAbilities from "./healer";

const schAbilities: {[key: string]: Ability} = {
  ...healerAbilities,
  
};

export default schAbilities;