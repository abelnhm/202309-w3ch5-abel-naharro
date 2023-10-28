import { Component } from './component';
import '../scss/style.scss';

export class Main extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<main class="container">
            </main>`;
  }
}
