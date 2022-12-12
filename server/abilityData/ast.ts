import { Ability } from "../../types"
import healerAbilities from "./healer";

const astAbilities: {[key: string]: Ability} = {
  ...healerAbilities,
  'Benefic': {
    name: 'Benefic',
    type: 'spell',
    iconPath: '',
    recast: 2.5,
    charges: 1,
    range: 30,
    radius: null,
    description: `Restores target's HP.
    Cure Potency: 500
    Additional Effect: 15% chance next Benefic II will restore critical HP
    Duration: 15s`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        healing: {
          potency: 500
        }
      }
    ]
  },
  'Helios': {
    name: 'Helios',
    type: 'spell',
    iconPath: '',
    recast: 2.5,
    charges: 1,
    range: null,
    radius: 15,
    description: `Restores own HP and the HP of all nearby party members.
    Cure Potency: 400`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        healing: {
          potency: 400
        }
      }
    ],
  },
  'Essential Dignity': {
    name: 'Essential Dignity',
    type: 'ability',
    iconPath: '',
    recast: 40,
    charges: 2,
    range: 30,
    radius: null,
    description: `Restores target's HP.
    Cure Potency: 400
    Potency increases up to 900 as the target's HP decreases, reaching its maximum value when the target has 30% HP or less.
    Maximum Charges: 2`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        healing: {
          potency: 900
        }
      }
    ]
  },
  'Benefic II': {
    name: 'Benefic II',
    type: 'spell',
    iconPath: '',
    recast: 2.5,
    charges: 1,
    range: 30,
    radius: null,
    description: `Restores target's HP.
    Cure Potency: 800`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        healing: {
          potency: 800
        }
      }
    ]
  },
  'Aspected Benefic': {
    name: 'Aspected Benefic',
    type: 'spell',
    iconPath: '',
    recast: 2.5,
    charges: 1,
    range: 30,
    radius: null,
    description: `Restores target's HP.
    Cure Potency: 250
    Additional Effect: Regen
    Cure Potency: 250
    Duration: 15s`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        healing: {
          potency: 250,
        },
        regen: {
          potency: 250,
          duration: 15
        }
      }
    ]
  },
  'Aspected Helios': {
    name: 'Aspected Helios',
    type: 'spell',
    iconPath: '',
    recast: 2.5,
    charges: 1,
    range: null,
    radius: 15,
    description: `Restores own HP and the HP of all nearby party members.
    Cure Potency: 250
    Additional Effect: Regen
    Cure Potency: 150
    Duration: 15s`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        healing: {
          potency: 250
        },
        regen: {
          potency: 150,
          duration: 15
        }
      }
    ]
  },
  'Synastry': {
    name: 'Synastry',
    type: 'ability',
    iconPath: '',
    recast: 120,
    charges: 1,
    range: 30,
    radius: null,
    description: `Generate an aetheric bond with target party member. Each time you cast a single-target healing spell on yourself or a party member, the party member with whom you have the bond will also recover HP equaling 40% of the original spell.
    Duration: 20s`,
    effects: [
      {
        target: 'single',
        includesSelf: false,
        synastry: {
          amount: 0.4,
          duration: 20,
        }
      }
    ]
  },
  'Collective Unconscious': {
    name: 'Collective Unconscious',
    type: 'ability',
    iconPath: '',
    recast: 60,
    charges: 1,
    range: null,
    radius: 8,
    description: `Creates a celestial ring around the caster.
    Additional Effect: Reduces damage taken by 10% and applies Wheel of Fortune to self and any party members who enter
    Duration: 18s
    Wheel of Fortune Effect: Regen
    Cure Potency: 100
    Duration: 15s
    Effect ends upon using another action or moving (including facing a different direction).
    Cancels auto-attack upon execution.
    `,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        damageReduction: {
          amount: 0.1,
          duration: 3 // can last up to 18 but only while ability is channeled, which is atypical in most gameplay
        },
        regen: {
          potency: 100,
          duration: 15
        }
      },
    ]
  },
  'Celestial Opposition': {
    name: 'Celestial Opposition',
    type: 'ability',
    iconPath: '',
    recast: 60,
    charges: 1,
    range: null,
    radius: 15,
    description: `Restores own HP and the HP of all nearby party members.
    Cure Potency: 200
    Additional Effect: Regen
    Cure Potency: 100
    Duration: 15s`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        healing: {
          potency: 200,
        },
        regen: {
          potency: 100,
          duration: 15
        }
      }
    ]
  },
  'Stellar Detonation': {
    name: 'Stellar Detonation',
    type: 'ability',
    iconPath: '',
    recast: 60,
    charges: 1,
    range: 30,
    radius: 20,
    description: `Deploys an Earthly Star in the designated area and grants the effect of Earthly Dominance.
    Duration: 10s
    Executing Stellar Detonation while under the effect of Earthly Dominance creates a Stellar Burst dealing unaspected damage with a potency of 205 to all nearby enemies. Also restores own HP and the HP of all nearby party members.
    Cure Potency: 540
    After 10s, Earthly Dominance effect is changed to Giant Dominance
    Duration: 10s
    Waiting 10s or executing Stellar Detonation while under the effect of Giant Dominance creates a Stellar Explosion dealing unaspected damage with a potency of 310 to all nearby enemies. Also restores own HP and the HP of all nearby party members.
    Cure Potency: 720`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        healing: {
          potency: 720 // this assumes detonation under giant dominance, otherwise 540
        }
      }
    ]
  },
  'Celestial Intersection': {
    name: 'Celestial Intersection',
    type: 'ability',
    iconPath: '',
    recast: 30,
    charges: 2,
    range: 30,
    radius: null,
    description: `Restores own or target party member's HP.
    Cure Potency: 200
    Additional Sect Effect: Erects a magicked barrier which nullifies damage equaling 200% of the amount of HP restored
    Duration: 30s
    Maximum Charges: 2`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        healing: {
          potency: 200
        },
        barrier: {
          potency: 400,
          duration: 30
        }
      }
    ]
  },
  'Horoscope': {
    name: 'Horoscope',
    type: 'ability',
    iconPath: '',
    recast: 60,
    charges: 1,
    range: null,
    radius: 20,
    description: `Reads your fortune and those of nearby party members, granting them Horoscope.
    Duration: 10s
    Effect upgraded to Horoscope Helios upon receiving the effects of Helios or Aspected Helios.
    Duration: 30s
    Restores the HP of those under either effect when the cards are read a second time or the effect expires.
    Horoscope Cure Potency: 200
    Horoscope Helios Cure Potency: 400`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        healing: {
          potency: 200
        }
      }
    ]
  },
  'Horoscope Helios': {
    name: 'Horoscope Helios',
    type: 'ability',
    iconPath: '',
    recast: 60,
    charges: 1,
    range: null,
    radius: 20,
    description: `Reads your fortune and those of nearby party members, granting them Horoscope.
    Duration: 10s
    Effect upgraded to Horoscope Helios upon receiving the effects of Helios or Aspected Helios.
    Duration: 30s
    Restores the HP of those under either effect when the cards are read a second time or the effect expires.
    Horoscope Cure Potency: 200
    Horoscope Helios Cure Potency: 400`,
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
  'Neutral Sect': {
    name: 'Neutral Sect',
    type: 'ability',
    iconPath: '',
    recast: 120,
    charges: 1,
    range: null,
    radius: null,
    description: `Increases healing magic potency by 20%.
    Duration: 20s
    Additional Effect: When casting Aspected Benefic or Aspected Helios, erects a magicked barrier which nullifies damage
    Aspected Benefic Effect: Nullifies damage equaling 250% of the amount of HP restored
    Aspected Helios Effect: Nullifies damage equaling 125% of the amount of HP restored
    Duration: 30s`,
    effects: [
      {
        target: 'self',
        includesSelf: true,
        healingMagicPotencyIncrease: {
          amount: 1.2,
          duration: 20
        },
        grantsBuff: {
          name: 'Neutral Sect',
          duration: 20
        }
      }
    ]
  },
  'Neutral Aspected Benefic': {
    name: 'Neutral Aspected Benefic',
    type: 'spell',
    iconPath: '',
    recast: 2.5,
    charges: 1,
    range: 30,
    radius: null,
    description: `Restores target's HP.
    Cure Potency: 250
    Additional Effect: Regen
    Cure Potency: 250
    Duration: 15s
    Aspected Benefic Effect: Nullifies damage equaling 250% of the amount of HP restored
    Duration: 30s`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        healing: {
          potency: 250,
        },
        regen: {
          potency: 250,
          duration: 15
        },
        barrier: {
          potency: 625,
          duration: 30
        }
      }
    ]
  },
  'Neutral Aspected Helios': {
    name: 'Neutral Aspected Helios',
    type: 'spell',
    iconPath: '',
    recast: 2.5,
    charges: 1,
    range: null,
    radius: 15,
    description: `Restores own HP and the HP of all nearby party members.
    Cure Potency: 250
    Additional Effect: Regen
    Cure Potency: 150
    Duration: 15s
    Aspected Helios Effect: Nullifies damage equaling 125% of the amount of HP restored
    Duration: 30s`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        healing: {
          potency: 250
        },
        regen: {
          potency: 150,
          duration: 15
        },
        barrier: {
          potency: 312.5,
          duration: 30
        }
      }
    ]
  },
  'Exaltation': {
    name: 'Exaltation',
    type: 'ability',
    iconPath: '',
    recast: 60,
    charges: 1,
    range: 30,
    radius: null,
    description: `Reduces damage taken by self or target party member by 10%.
    Duration: 8s
    Additional Effect: Restores HP at the end of the effect's duration
    Cure Potency: 500`,
    effects: [
      {
        target: 'single',
        includesSelf: true,
        healing: {
          potency: 500 // healing received after 8 seconds
        },
        damageReduction: {
          amount: 0.1,
          duration: 8
        }
      }
    ]
  },
  'Microcosmos': {
    name: 'Microcosmos',
    type: 'ability',
    iconPath: '',
    recast: 180,
    charges: 1,
    range: null,
    radius: 20,
    description: `Triggers the healing effect of Macrocosmos, restoring HP equal to a cure of 200 potency plus 50% of compiled damage.
    Amount restored cannot exceed the target's maximum HP.`,
    effects: [
      {
        target: 'aoe',
        includesSelf: true,
        healing: {
          potency: 200,
        },
        compiledDamageHeal: {
          amount: 0.5
        }
      }
    ]
  },
};

export default astAbilities;