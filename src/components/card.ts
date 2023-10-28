import { Component } from './component';
import { Pokemon } from '../models/pokemon';
import '../scss/style.scss';

export class Card extends Component {
  pokemon: Pokemon;
  constructor(selector: string, pokemon: Pokemon) {
    super(selector);
    this.pokemon = { ...pokemon };
    this.manageComponent();
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
  }

  createTemplate() {
    return `
    <li class="pokemon-card">
      <!--<p><span>ID:</span>  </p>-->
      <p><span>Name:</span> ${this.pokemon.name} </p>
      <p><span>Owner:</span> ${this.pokemon.url} </p>
    </li>
      `;
  }
}
