import { browser } from "$app/environment";
import { writable, get } from "svelte/store";

const defaultNews = [];
const initialNews = browser ? JSON.parse(window.localStorage.getItem("news")) ?? defaultNews : defaultNews;

export const news = writable(initialNews);

news.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("news", JSON.stringify(value));
  }
});

export { news as default };