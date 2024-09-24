import { browser } from "$app/environment";
import { writable, get } from "svelte/store";

const defaultModels = [];
const initialModels = browser ? JSON.parse(window.localStorage.getItem("models")) ?? defaultModels : defaultModels;

export const models = writable(initialModels);

models.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("models", JSON.stringify(value));
  }
});

export { models as default };