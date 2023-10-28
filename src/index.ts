import './scss/style.scss';

import { Header } from './components/header';
import { Main } from './components/main';
import { List } from './components/list';
import { Card } from './components/card';

// Import { Main } from './components/main';
// import { Section } from './components/section';
// import { SeriesPending } from './components/seriesPending';
// import { ListSeriesPending } from './components/listSeriesPending';
// import { listSeries } from './data/repo';
// import { SeriesWatched } from './components/seriesWatched';
// import { ListSeriesWatched } from './components/listSeriesWatched';

function main() {
  console.log('Loaded main');

  const appElement = document.querySelector<HTMLDivElement>('#app');
  if (appElement === null) return;

  const components = [
    new Main('#app'),
    new Header('main', 'Pokémon'),
    new List('main'),
    // New Main('.container'),
    // new Section('main', 'Series list'),
    // new SeriesPending(
    //   '.series',
    //   'Pending series',
    //   'You have 4 series pending to watch'
    // ),
    // new ListSeriesPending('.series-pending', listSeries),
    // new SeriesWatched('.series', 'Watched series', 'You have watched 4 series'),
    // new ListSeriesWatched('.series-watched', listSeries),
  ];

  console.log(components);
}

main();
