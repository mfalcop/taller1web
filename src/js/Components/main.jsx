
const React = require('react');
const Header = require('./header.jsx');
const Section1 = require('./section1.jsx');
const Section2 = require('./section2.jsx');
const Section3 = require('./section3.jsx');
const Section4 = require('./section4.jsx');
const Contact = require('./contact.jsx');
const Footer = require('./footer.jsx');

class Main extends React.Component {
	render() {
		return (<main>
		<Header />
		<Section1 />
		<Section2 />
		<Section3 />
		<Section4 />
		<Contact />
		<Footer />
		</main>);
	}
}

export default Main;

