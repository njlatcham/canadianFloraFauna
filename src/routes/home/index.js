import { h, Component } from 'preact';
import { Router } from 'preact-router';

export default class Home extends Component {

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div class='home'>
        {/*<div class='grid grid1'></div>
        <div class='grid grid2'></div>
        <div class='grid grid3'></div>
        <div class='grid grid4'></div>
        <div class='grid grid5'>
          <h1>Canadian Fauna & Flora</h1>
        </div>
        <div class='grid grid6'></div>
        <div class='grid grid7'></div>
        <div class='grid grid8'></div>
        <div class='grid grid9'></div>*/}
      </div>
    );
  }
}