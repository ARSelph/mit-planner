import { Ability } from "../../types"
import tankAbilities from "./tank";
const basePath = '/03_DRK/'

const drkAbilities: {[key: string]: Ability} = {
  'Shadow Wall': {
    name: 'Shadow Wall',
    level: 38,
    type: 'ability',
    iconPath: 'shadow_wall.png',
    recast: 120,
    charges: 1,
    range: null,
    radius: null,
    description: `Reduces damage taken by 30%.
    Duration: 15s`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        damageReduction: {
          amount: 0.3,
          duration: 15
        }
      }
    ]
  },
  'Dark Mind': {
    name: 'Dark Mind',
    level: 45,
    type: 'ability',
    iconPath: 'dark_mind.png',
    recast: 60,
    charges: 1,
    range: null,
    radius: null,
    description: `Reduces magic vulnerability by 20%.
    Duration: 10s`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        magicalDamageReduction: {
          amount: 0.2,
          duration: 10
        }
      }
    ]
  },
  'Living Dead': {
    name: 'Living Dead',
    level: 50,
    type: 'ability',
    iconPath: 'living_dead.png',
    recast: 300,
    charges: 1,
    range: null,
    radius: null,
    description: `Grants the effect of Living Dead.
    When HP is reduced to 0 while under the effect of Living Dead, instead of becoming KO'd, your status will change to Walking Dead.
    Living Dead Duration: 10s
    Additional Effect: Restores HP with each weaponskill successfully delivered or spell cast
    Cure Potency: 1500
    While under the effect of Walking Dead, most attacks will not lower your HP below 1. If, before the Walking Dead timer runs out, an amount of HP totaling your maximum HP is restored, the effect will change to Undead Rebirth. If this amount is not restored, you will be KO'd.
    Walking Dead Duration: 10s
    While under the effect of Undead Rebirth, most attacks will not lower your HP below 1.
    Undead Rebirth Duration: Time remaining on Walking Dead`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        invulnerability: {
          duration: 10
        }
      }
    ]
  },
  'The Blackest Night': {
    name: 'The Blackest Night',
    level: 70,
    type: 'ability',
    iconPath: 'the_blackest_night.png',
    recast: 15,
    charges: 1,
    range: 30,
    radius: null,
    description: `Creates a barrier around self or target party member that absorbs damage totaling 25% of target's maximum HP.
    Duration: 7s
    Grants Dark Arts when barrier is completely absorbed.
    Dark Arts Effect: Consume Dark Arts instead of MP to execute Edge of Shadow or Flood of Shadow`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        barrier: {
          maxHpFraction: 0.25,
          duration: 7
        }
      }
    ]
  },
  'Dark Missionary': {
    name: 'Dark Missionary',
    level: 76,
    type: 'ability',
    iconPath: 'dark_missionary.png',
    recast: 90,
    charges: 1,
    range: null,
    radius: 15,
    description: `Reduces magic damage taken by self and nearby party members by 10%.
    Duration: 15s`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        damageReduction: {
          amount: 0.1,
          duration: 15
        }
      }
    ]
  },
  'Oblation': {
    name: 'Oblation',
    level: 82,
    type: 'ability',
    iconPath: 'oblation.png',
    recast: 60,
    charges: 2,
    range: 30,
    radius: null,
    description: `Reduces damage taken by a party member or self by 10%.
    Duration: 10s
    Maximum Charges: 2`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        damageReduction: {
          amount: 0.1,
          duration: 10
        }
      }
    ]
  },
};

for (const ability in drkAbilities) {
  drkAbilities[ability].iconPath = basePath + drkAbilities[ability].iconPath;
}

Object.assign(drkAbilities, tankAbilities);

export default drkAbilities;