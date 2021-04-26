import { h, Component } from 'preact';
import { Router } from 'preact-router';

export default class Species extends Component {

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div>
      </div>
    );
  }
}
