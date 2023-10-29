import { ApiRepo } from '../data/api.repo';
import { Pokemon } from '../models/pokemon';

describe('Given ApiRepo class', () => {
  const jsonMock = jest.fn().mockResolvedValue([]);
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: jsonMock,
  });
  describe('When we instantiate it', () => {
    const repo = new ApiRepo();
    test('Then method getPokemons should be used', async () => {
      const expected: Pokemon[] = [];
      const result = await repo.getPokemons(20);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
    test('Then method loadDetailsPokemons should be used', async () => {
      const expected: Pokemon[] = [];
      const result = await repo.loadDetailsPokemons(
        'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20'
      );
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
    test('Then method loadAllInfoAboutPokemon should be used', async () => {
      const expected: Pokemon[] = [];
      const result = await repo.loadAllInfoAboutPokemon(1);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });
});
