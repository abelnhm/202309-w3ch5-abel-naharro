import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from '../components/header';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    document.body.innerHTML = '<header></header>';
    const header = new Header('#app', 'Pokémon');
    test('Then it should be instance of Header', () => {
      expect(header).toBeInstanceOf(Header);
    });
    test('Then it should be in the document', () => {
      const element = screen.getByRole('banner');
      expect(element).toBeInTheDocument();
    });
  });
});
