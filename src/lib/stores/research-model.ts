import { writable } from "svelte/store";

const initModel: {[key:string] : any} = {};

export const researchModel = writable(initModel);