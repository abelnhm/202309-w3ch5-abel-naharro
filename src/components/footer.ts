import { Component } from './component';
import '../scss/style.scss';

export class Footer extends Component {
  title: string;
  constructor(selector: string, title: string) {
    super(selector);
    this.title = title;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<footer>
              <img src="/giphy.gif" alt="Project by Abel Naharro">
              <p>
              ${this.title}
              </p>
            </footer>`;
  }
}
