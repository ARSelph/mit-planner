import { Job } from "../../types";
import blmAbilities from "../abilityData/blm";

const blm: Job = {
  name: 'blm',
  fullName: 'Black Mage',
  iconPath: '03_DPS/Job/BlackMage.png',
  role: 'caster',
  abilities: blmAbilities
}

export default blm;