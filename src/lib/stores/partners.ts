import { browser } from "$app/environment";
import { writable, get } from "svelte/store";

const defaultPartners = [];
const initialPartners = browser ? JSON.parse(window.localStorage.getItem("partners")) ?? defaultPartners : defaultPartners;

export const partners = writable(initialPartners);

partners.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("partners", JSON.stringify(value));
  }
});

export { partners as default };