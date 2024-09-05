import './style.css'
import { printHeader } from './src/components/header/header'
import { printFooter } from './src/components/FOOTER/footer'
import { Main, addMainListeners } from "./src/components/Main/Main";

printHeader();

const render = () => {
  document.querySelector("main").innerHTML = `${Main()}`;
};

render();
addMainListeners();

printFooter();
