import { Job } from "../../types";
import rdmAbilities from "../abilityData/rdm";

const rdm: Job = {
  name: 'rdm',
  fullName: 'Red Mage',
  iconPath: '03_DPS/Job/RedMage.png',
  role: 'caster',
  abilities: rdmAbilities
}

export default rdm;