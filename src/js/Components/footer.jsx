
const React = require('react');

class Footer extends React.Component {
	
	render() {
		return (<footer>
		<ul>
			<li><a href="#"><span className="icon-twitter"></span></a></li>
			<li><a href="#"><span className="icon-facebook"></span></a></li>
			<li><a href="#"><span className="icon-instagram"></span></a></li>
		</ul>

		<p>&copy; Terms &amp; conditions | Design & Development: <a href="#">John Smith</a></p>
		
		</footer>);
	}
}

export default Footer;
