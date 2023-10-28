import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Main } from '../components/main';

describe('Given Main component', () => {
  describe('When we instantiate', () => {
    document.body.innerHTML = '<main></main>';
    const main = new Main('#app');
    test('Then it should be instance of Section', () => {
      expect(main).toBeInstanceOf(Main);
    });
    test('Then it should be in the document', () => {
      const element = screen.getByRole('main');
      expect(element).toBeInTheDocument();
    });
  });
});
