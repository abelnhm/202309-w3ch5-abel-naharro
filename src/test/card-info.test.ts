import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { CardInfo } from '../components/card-info';

describe('Given Card component', () => {
  describe('When we instantiate', () => {
    document.body.innerHTML = '<li></li>';
    const card = new CardInfo('#app', 1);
    test('Then it should be instance of Card', () => {
      expect(card).toBeInstanceOf(CardInfo);
    });
    test('Then it should be in the document', () => {
      const element = screen.getByRole('section');
      expect(element).toBeInTheDocument();
    });
  });
});
