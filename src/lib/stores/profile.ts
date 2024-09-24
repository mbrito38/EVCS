import { browser } from "$app/environment";
import { writable, get } from "svelte/store";

const defaultProfile = {};
const initialProfile = browser ? JSON.parse(window.localStorage.getItem("profile")) ?? defaultProfile : defaultProfile;

export const profile = writable(initialProfile);

profile.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("profile", JSON.stringify(value));
  }
});

export { profile as default };