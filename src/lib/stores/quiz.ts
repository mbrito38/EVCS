import { browser } from "$app/environment";
import { writable, get } from "svelte/store";

const defaultQuiz = {};
const initialQuiz = browser ? JSON.parse(window.localStorage.getItem("quiz")) ?? defaultQuiz : defaultQuiz;

export const quiz = writable(initialQuiz);

quiz.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("quiz", JSON.stringify(value));
  }
});

export { quiz as default };