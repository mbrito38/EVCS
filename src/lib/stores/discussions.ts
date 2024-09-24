import { browser } from "$app/environment";
import { writable, get } from "svelte/store";

const defaultDiscussions = [];
const initialDiscussions = browser ? JSON.parse(window.localStorage.getItem("discussions")) ?? defaultDiscussions : defaultDiscussions;

export const discussions = writable(initialDiscussions);

discussions.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("discussions", JSON.stringify(value));
  }
});

export { discussions as default };