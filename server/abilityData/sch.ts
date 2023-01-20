import { Ability } from "../../types"
import healerAbilities from "./healer";
const basePath = '/17_SCH/'

const schAbilities: {[key: string]: Ability} = {
  'Physick': {
    name: 'Physick',
    level: 4,
    type: 'spell',
    iconPath: 'physick.png',
    recast: 2.5,
    charges: 1,
    range: 30,
    radius: null,
    description: `Restores target's HP.
    Cure Potency: 450`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        healing: {
          potency: 450
        }
      }
    ]
  },
  'Whispering Dawn': {
    name: 'Whispering Dawn',
    level: 20,
    type: 'ability',
    iconPath: 'whispering_dawn.png',
    recast: 60,
    charges: 1,
    range: null,
    radius: null,
    description: `Orders faerie to execute Whispering Dawn. If Seraph is summoned, orders her to execute Angel's Whisper.
    Whispering Dawn/Angel's Whisper Effect: Gradually restores the HP of all nearby party members
    Cure Potency: 80
    Duration: 21s`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        regen: {
          potency: 80,
          duration: 21
        }
      }
    ]
  },
  'Adloquium': {
    name: 'Adloquium',
    level: 30,
    type: 'spell',
    iconPath: 'adloquium.png',
    recast: 2.5,
    charges: 1,
    range: 30,
    radius: null,
    description: `Restores target's HP.
    Cure Potency: 300
    Additional Effect: Grants Galvanize to target, nullifying damage equaling 180% of the amount of HP restored. When critical HP is restored, also grants Catalyze, nullifying damage equaling 180% the amount of HP restored.
    Duration: 30s
    Effect cannot be stacked with certain sage barrier effects.`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        healing: {
          potency: 300
        },
        barrier: {
          potency: 540,
          duration: 30
        }
      }
    ]
  },
  'Succor': {
    name: 'Succor',
    level: 35,
    type: 'spell',
    iconPath: 'succor.png',
    recast: 2.5,
    charges: 1,
    range: null,
    radius: 15,
    description: `Restores own HP and the HP of all nearby party members.
    Cure Potency: 200
    Additional Effect: Erects a magicked barrier which nullifies damage equaling 160% of the amount of HP restored
    Duration: 30s
    Effect cannot be stacked with certain sage barrier effects.`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        healing: {
          potency: 200
        },
        barrier: {
          potency: 320,
          duration: 30
        }
      }
    ]
  },
  'Fey Illumnination': {
    name: 'Fey Illumnitation',
    level: 40,
    type: 'ability',
    iconPath: 'fey_illumination.png',
    recast: 120,
    charges: 1,
    range: null,
    radius: 15,
    description: `Orders faerie to execute Fey Illumination. If Seraph is summoned, orders her to execute Seraphic Illumination.
    Fey Illumination/Seraphic Illumination Effect: Increases healing magic potency of all nearby party members by 10%, while reducing magic damage taken by all nearby party members by 5%
    Duration: 20s
    Effect cannot be stacked with Seraphic Illumination.`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        healingMagicPotencyIncrease: {
          amount: 1.1,
          duration: 20
        },
        magicalDamageReduction: {
          amount: 0.05,
          duration: 20
        }
      }
    ]
  },
  'Lustrate': {
    name: 'Lustrate',
    level: 45,
    type: 'ability',
    iconPath: 'lustrate.png',
    recast: 1,
    charges: 1,
    range: 30,
    radius: null,
    description: `Restores target's HP.
    Cure Potency: 600
    Additional Effect: Increases Faerie Gauge by 10
    Aetherflow Gauge Cost: 1`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        healing: {
          potency: 600
        }
      }
    ]
  },
  'Sacred Soil': {
    name: 'Sacred Soil',
    level: 50,
    type: 'ability',
    iconPath: 'sacred_soil.png',
    recast: 30,
    charges: 1,
    range: 30,
    radius: 10,
    description: `Creates a designated area in which party members will only suffer 90% of all damage inflicted.
    Duration: 15s
    Additional Effect: Regen
    Cure Potency: 100
    Additional Effect: Increases Faerie Gauge by 10
    Aetherflow Gauge Cost: 1`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        damageReduction: {
          amount: 0.1,
          duration: 15
        },
        regen: {
          potency: 100,
          duration: 15
        }
      }
    ]
  },
  'Indomitability': {
    name: 'Indomitability',
    level: 52,
    type: 'ability',
    iconPath: 'indomitability.png',
    recast: 30,
    charges: 1,
    range: null,
    radius: 15,
    description: `Restores own HP and the HP of all nearby party members.
    Cure Potency: 400
    Additional Effect: Increases Faerie Gauge by 10
    Aetherflow Gauge Cost: 1`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        healing: {
          potency: 400
        }
      }
    ]
  },
  // Deployment Tactics - modifier for Adlo, apply shield to party
  // Emergency Tactics - modifier for Adlo/Succor, heal instead of shield
  'Dissipation': {
    name: 'Dissipation',
    level: 60,
    type: 'ability',
    iconPath: 'dissipation.png',
    recast: 180,
    charges: 1,
    range: null,
    radius: null,
    description: `Orders your faerie away while granting you a full Aetherflow stack. Also increases healing magic potency by 20%.
    Duration: 30s
    Current faerie will return once the effect expires.
    Summon Eos or Summon Selene cannot be executed while under the effect of Dissipation.
    Can only be executed while in combat.`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        healingMagicPotencyIncrease: {
          amount: 1.2,
          duration: 30
        }
      }
    ]
  },
  'Excogitation': {
    name: 'Excogitation',
    level: 62,
    type: 'ability',
    iconPath: 'excogitation.png',
    recast: 45,
    charges: 1,
    range: 30,
    radius: null,
    description: `Grants self or target party member the effect of Excogitation, restoring HP when member's HP falls below 50% or upon effect duration expiration.
    Cure Potency: 800
    Duration: 45s
    Additional Effect: Increases Faerie Gauge by 10
    Aetherflow Gauge Cost: 1`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        excog: {
          potency: 800,
          duration: 45
        }
      }
    ]
  },
  // Aetherpact - 300 potency cure ticks which deplete faerie gauge
  // Recitation - guarantees crit Adlo, Succor, Indom, or Excog
  'Fey Blessing': {
    name: 'Fey Blessing',
    level: 76,
    type: 'ability',
    iconPath: 'fey_blessing.png',
    recast: 60,
    charges: 1,
    range: null,
    radius: 20,
    description: `Orders faerie to execute Fey Blessing.
    Fey Blessing Effect: Restores the HP of all nearby party members
    Cure Potency: 320`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        healing: {
          potency: 320
        }
      }
    ]
  },
  'Summon Seraph': {
    name: 'Summon Seraph',
    level: 80,
    type: 'ability',
    iconPath: 'summon_seraph.png',
    recast: 120,
    charges: 1,
    range: null,
    radius: null,
    description: `Summons Seraph to fight at your side. When set to guard, automatically casts Seraphic Veil on party members who suffer damage.
    Cannot summon Seraph unless a pet is already summoned. Current pet will leave the battlefield while Seraph is present, and return once gone.
    Duration: 22s`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        grantsBuff: {
          name: 'seraph',
          duration: 22
        }
      }
    ]
  },
  'Consolation': {
    name: 'Consolation',
    level: 80,
    type: 'ability',
    iconPath: 'consolation.png',
    recast: 30,
    charges: 1,
    range: null,
    radius: 20,
    description: `Orders Seraph to execute Consolation.
    Consolation Effect: Restores the HP of all nearby party members
    Cure Potency: 250
    Additional Effect: Erects a magicked barrier which nullifies damage equaling the amount of HP restored
    Duration: 30s
    Maximum Charges: 2`,
    requiresBuff: ['seraph'],
    effects: [
      {
        target: 'self',
        includesSelf: true,
        healing: {
          potency: 250
        },
        barrier: {
          potency: 250,
          duration: 30
        }
      }
    ]
  },
  'Protraction': {
    name: 'Protraction',
    level: 86,
    type: 'ability',
    iconPath: 'protraction.png',
    recast: 60,
    charges: 1,
    range: 30,
    radius: null,
    description: `Increases maximum HP of a party member or self by 10% and restores the amount increased.
    Additional Effect: Increases HP recovery via healing actions by 10%
    Duration: 10s`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        maxHpIncrease: {
          amount: 1.1,
          duration: 10
        },
        hpRecoveryIncrease: {
          amount: 1.1,
          duration: 10
        }
      }
    ]
  },
  'Expedient': {
    name: 'Expedient',
    level: 90,
    type: 'ability',
    iconPath: 'expedient.png',
    recast: 120,
    charges: 1,
    range: null,
    radius: 15,
    description: `Grants Expedience and Desperate Measures to all nearby party members.
    Expedience Effect: Increases movement speed
    Duration: 10s
    Desperate Measures Effect: Reduces damage taken by 10%
    Duration: 20s`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        damageReduction: {
          amount: 0.1,
          duration: 20
        }
        // party-wide sprint for 10s
      }
    ]
  },
};

for (const ability in schAbilities) {
  schAbilities[ability].iconPath = basePath + schAbilities[ability].iconPath;
}

Object.assign(schAbilities, healerAbilities);

export default schAbilities;