import { Job } from "../../types";
import whmAbilities from "../abilityData/whm";

const whm: Job = {
  name: 'whm',
  fullName: 'White Mage',
  iconPath: '02_HEALER/Job/WhiteMage.png',
  role: 'healer',
  abilities: whmAbilities
}

export default whm;