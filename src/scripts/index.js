/* eslint-disable quotes */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import swRegister from "./utils/sw-register";
import app from './views/app';

window.addEventListener('DOMContentLoaded', () => {
  app();
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
