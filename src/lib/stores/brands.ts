import { browser } from "$app/environment";
import { writable, get } from "svelte/store";

const defaultBrands = [];
const initialBrands = browser ? JSON.parse(window.localStorage.getItem("brands")) ?? defaultBrands : defaultBrands;

export const brands = writable(initialBrands);

brands.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("brands", JSON.stringify(value));
  }
});

export { brands as default };