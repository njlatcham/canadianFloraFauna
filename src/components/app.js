import { h, Component } from 'preact';
import { Router } from 'preact-router';

import style from '../styles/css/styles.css';

import Header from './header/header.js';
import Footer from './footer/footer.js'

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';
import Animalia from '../routes/animalia/animalia.js'
import Plantae from '../routes/plantae/plantae.js'

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />

				<div class='background-image'>
					<p class='photo-creds'>Photo by Bert Vanderzon</p>
				</div>

				<h2>A locally developed encyclpedia on Canadian Plants and Animals</h2>

				<div class='kingdoms'>
					<div class='animalia-card'>
						<div class='animalia-header'>
							<div>
								<h5>Kingdom:</h5>
								<h2>Animalia</h2>
							</div>
							<div>
								<h5 class='latin'>Strix varia</h5>
								<h3>Barred Owl</h3>
							</div>
						</div>

						<h4>Phylum: Chordata</h4>
						<h4>Class: Aves</h4>
						<h4>Order: Strigiformes</h4>
						<h4>Family: Strigidae</h4>
						<h4>Genus: Strix</h4>
						<h4>Species: varia</h4>
					</div>

					<div class='plantae-card'>
						<div class='plantae-header'>
							<div>
								<h5>Kingdom:</h5>
								<h2>Plantae</h2>
							</div>
							<div>
								<h5 class='latin'>Rhus typhina</h5>
								<h3>Staghorn Sumac</h3>
							</div>
						</div>

						<h4>Phylum: Chordata</h4>
						<h4>Class: Aves</h4>
						<h4>Order: Strigiformes</h4>
						<h4>Family: Strigidae</h4>
						<h4>Genus: Strix</h4>
						<h4>Species: varia</h4>
					</div>	
				</div>

				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Animalia path='/animalia' />
					<Plantae path='/plantae' />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>

				<Footer />
			</div>
		);
	}
}
