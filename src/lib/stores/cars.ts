import { browser } from "$app/environment";
import { writable, get } from "svelte/store";

const defaultCars = [];
const initialCars = browser ? JSON.parse(window.localStorage.getItem("cars")) ?? defaultCars : defaultCars;

export const cars = writable(initialCars);

cars.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("cars", JSON.stringify(value));
  }
});

export { cars as default };