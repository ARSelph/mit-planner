/*
Information needed from encounter:
{
  encounterName: string,
  bossName: string,
  duration: number (length of encounter in seconds),
  variations: number (possible rng changing encounter),
  abilities: [
    {
      name: string,
      type: raidwide | tankbuster | other,
      description: string,
      time: number,
      appearsInVariation: number[],
    }
  ] 
}
*/

import { Encounters, EncounterData } from "../../types";
import p5s from "./p5s";
import p6s from "./p6s";
import p7s from "./p7s";
import p8s1 from "./p8s1";
import p8s2 from "./p8s2";

const encounters: Encounters = {
  p5s,
  p6s,
  p7s,
  p8s1,
  p8s2
}

export default encounters;