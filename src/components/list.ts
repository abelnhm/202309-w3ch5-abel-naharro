import { Component } from './component';
import { Pokemon } from '../models/pokemon';
import { ApiRepo } from '../data/api.repo';
import { Card } from './card';
import '../scss/style.scss';

export class List extends Component {
  pokemons: Pokemon[];
  repo: ApiRepo;
  constructor(selector: string) {
    super(selector);
    this.repo = new ApiRepo();
    this.pokemons = [];
    this.loadPokemons();
    console.log('Fist Load');
    console.log(this.pokemons);
    this.template = this.createTemplate();
    this.render();
  }

  async loadPokemons() {
    try {
      this.pokemons = await this.repo.getPokemons();
      console.log('Load from API');
      console.log(this.pokemons);
      this.clear();
      this.render();
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  render() {
    this.template = this.createTemplate();
    super.render();
    console.log('LISTA CON CARDS DE POKEMON');
    console.log(this.pokemons);

    const listPokemons: Pokemon[] = this.pokemons.results;

    return listPokemons.map((item) => new Card('.cards', item));
  }

  createTemplate() {
    return `
    <div class="buttons-pages">
      <button class="button-back" type="button">
        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
      </button>
      <button class="button-next" type="button">
        Next <i class="fa fa-chevron-right" aria-hidden="true"></i> 
      </button>
    </div>
    <ul class="cards"></ul>`;
  }
}
