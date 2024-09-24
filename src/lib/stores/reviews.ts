import { browser } from "$app/environment";
import { writable, get } from "svelte/store";

const defaultReviews = [];
const initialReviews = browser ? JSON.parse(window.localStorage.getItem("reviews")) ?? defaultReviews : defaultReviews;

export const reviews = writable(initialReviews);

reviews.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("reviews", JSON.stringify(value));
  }
});

export { reviews as default };