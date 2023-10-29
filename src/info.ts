import './scss/style.scss';

import { Header } from './components/header';
import { Main } from './components/main';
import { Router } from './components/router';
import { Footer } from './components/footer';

function main() {
  const appElement = document.querySelector<HTMLDivElement>('#app');
  if (appElement === null) return;

  const components = [
    new Main('#app'),
    new Header('main', 'Pokémon'),
    new Router('main'),
    new Footer('#app', 'By Abel Naharro'),
  ];

  console.log(components);
}

main();
