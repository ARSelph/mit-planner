import ast from "./ast";
import blm from "./blm";
import blu from "./blu";
import brd from "./brd";
import dnc from "./dnc";
import drg from "./drg";
import drk from "./drk";
import gnb from "./gnb";
import mch from "./mch";
import mnk from "./mnk";
import nin from "./nin";
import pld from "./pld";
import rdm from "./rdm";
import rpr from "./rpr";
import sam from "./sam";
import sch from "./sch";
import sge from "./sge";
import smn from "./smn";
import war from "./war";
import whm from "./whm";

const allJobs = {
  ast, blm, blu, brd, dnc, drg, drk, gnb, mch, mnk, nin, pld, rdm, rpr, sam, sch, sge, smn, war, whm
}

export type JobString = keyof typeof allJobs;
export default allJobs;