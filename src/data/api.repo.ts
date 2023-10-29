import { Pokemon } from '../models/pokemon';

export class ApiRepo {
  apiUrl = 'https://pokeapi.co/api/v2/';

  async getPokemons(page: number): Promise<Pokemon> {
    const response = await fetch(
      this.apiUrl + 'pokemon/?limit=20&offset=' + page
    );
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async loadDetailsPokemons(url: string) {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async loadAllInfoAboutPokemon(id: number) {
    const response = await fetch(this.apiUrl + 'pokemon/' + id);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
