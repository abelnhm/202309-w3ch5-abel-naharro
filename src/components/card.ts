import { Component } from './component';
import { PokemonIndex } from '../models/pokemon';
import { ApiRepo } from '../data/api.repo';
import '../scss/style.scss';

export class Card extends Component {
  pokemon: PokemonIndex;
  repo: ApiRepo;
  id: number = 0;
  image: string = '';
  constructor(selector: string, pokemon: string) {
    super(selector);
    this.repo = new ApiRepo();
    this.pokemon = { ...JSON.parse(pokemon) };
    (async () => {
      const pokemonDetails = await this.loadDetails();
      this.id = pokemonDetails.id;
      this.manageComponent();
    })();
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
  }

  async loadDetails(): Promise<any> {
    try {
      const responseDetails = await this.repo.loadDetailsPokemons(
        this.pokemon.url
      );

      return await responseDetails;
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  createTemplate() {
    return `
    <li class="pokemon-card">
      <a href="/info.html?id=${this.id}">
      <p><span>ID:</span> ${this.id}</p>
      <img alt="Image pokémon ${this.pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${this.id}.gif">
      
      <p>${this.pokemon.name} </p>
      <!--<p><span>Owner:</span> ${this.pokemon.url} </p>-->
      </a>
    </li>
      `;
  }
}
