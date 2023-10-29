import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Card } from '../components/card';
import { Pokemon } from '../models/pokemon';

describe('Given Card component', () => {
  describe('When we instantiate', () => {
    document.body.innerHTML = '<li></li>';
    const item: Pokemon = {
      count: 0,
      next: '',
      preview: '',
      results: [],
    };
    const card = new Card('#app', JSON.stringify(item));
    test('Then it should be instance of Card', () => {
      expect(card).toBeInstanceOf(Card);
    });
    test('Then it should be in the document', () => {
      const element = screen.getByRole('listitem');
      expect(element).toBeInTheDocument();
    });
  });
});
