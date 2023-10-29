import { Component } from './component';
import { ApiRepo } from '../data/api.repo';
import '../scss/style.scss';

export class CardInfo extends Component {
  repo: ApiRepo;
  id: number = 0;
  name: string = '';
  image: string = '';
  typePokemon: string[] = [];
  abilities: string[] = [];
  baseExperience: number = 0;

  constructor(selector: string, id: number) {
    super(selector);
    this.repo = new ApiRepo();
    this.id = id;

    (async () => {
      const pokemonDetails = await this.loadDetails();
      this.id = pokemonDetails.id;
      this.name = await pokemonDetails.name;
      this.typePokemon = await pokemonDetails.types.map(
        (type: object) => (type as { type: { name: string } }).type.name
      );
      this.abilities = await pokemonDetails.abilities.map(
        (ability: object) =>
          (ability as { ability: { name: string } }).ability.name
      );
      this.baseExperience = await pokemonDetails.base_experience;

      console.log(this.abilities);

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
      const responseInfo = await this.repo.loadAllInfoAboutPokemon(this.id);
      return await responseInfo;
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  createTemplate() {
    return `
    <section class="section-pokemon-card-info">
    <div class="pokemon-card-info">
      <p><span>ID:</span> ${this.id}</p>
      <img alt="Image pokémon ${
        this.name
      }" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
      this.id
    }.gif">
      <p>Name: ${this.name} </p>
      <p>Type: ${this.typePokemon.join(' | ')}<p>
      <p>Abilities: ${this.abilities.join(' | ')}</p>
      <p>Base experience: <span> ${this.baseExperience}</p>
      </div>
    </section>
      `;
  }
}
