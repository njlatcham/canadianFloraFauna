import { h, Component } from 'preact';
import { Router } from 'preact-router';

export default class plantae extends Component {

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div>
        <h1>Plants of Canada</h1>
      </div>
    );
  }
}