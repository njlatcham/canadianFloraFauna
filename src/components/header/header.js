import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
	<header class='header'>
		<div class='mainTitle'>
      <Link href="/">
        <img src="../../assets/imgs/mapleleaf.png" alt="maple leaf"/>
        <h1>Flora || Fauna</h1>
      </Link>
    </div>
		<nav class='navigation'>
      <a href="">Explore</a>
      <a href="">Share</a>
      <a href="">About</a>
      <a href="">Contact Us</a>
      {/*<Link href="/plantae">Flora</Link>
      <Link href="/animalia">Fauna</Link>*/}
    </nav>
	</header>
);

export default Header;
