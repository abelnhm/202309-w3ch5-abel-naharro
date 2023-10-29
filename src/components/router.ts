import { CardInfo } from './card-info';
import { Component } from './component';

export class Router extends Component {
  path: string;
  parameter: string;
  constructor(selector: string) {
    super(selector);
    this.path = location.pathname;
    this.parameter = location.search;
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
  }

  loadTemplateInfoPokemon(parameter: string) {
    const cleanParams: string[] = parameter.split('=');
    const id: number = Number(cleanParams[1]);
    console.log(cleanParams, '-', id);

    const cardInfoPokemon = new CardInfo('main', id);
    console.log(cardInfoPokemon);
  }

  createTemplate() {
    let routeHtml = '<section class="nav-info"><p>';

    switch (this.path) {
      case '/index.html':
        routeHtml += `<h2>PokeIndex</h2>`;
        break;
      case '/info.html':
        // RouteHtml += `<h2>Información de Pokémon</h2><a href="/">Volver</a>`;
        routeHtml += `<a class="button-back" href="/">
                        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
                      </a>`;

        this.loadTemplateInfoPokemon(this.parameter);

        break;
      default:
        routeHtml += `<h2>PokeIndex</h2>`;
        break;
    }

    routeHtml += '</p></section>';
    return routeHtml;
  }
}
