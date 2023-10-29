import { Component } from './component';
import '../scss/style.scss';

export class Header extends Component {
  title: string;
  constructor(selector: string, title: string) {
    super(selector);
    this.title = title;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<header class="main-header">
              <img src="/pokemon.svg" alt="${this.title}">
            </header>`;
  }
}
