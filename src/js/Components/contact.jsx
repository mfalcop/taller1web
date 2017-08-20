
const React = require('react');

class Contact extends React.Component {
	
	render() {
		return (<section className="sectcontact">
					<h2 className="sayhello">  Say Hello.</h2>
					<p className="txtcontact">Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.</p>
					<div className="containerContact">
					<form method="post" action="#">
						<div className="topRow">
						<div className="inputs"><input type="text" name="name" placeholder="Name" /></div>
						<div className="inputs"><input type="email" name="email" placeholder="Email" /></div>
						</div>
						<div className="inputmessage"><textarea className="textarea" name="message" placeholder="Message" rows="6"></textarea></div>
						<div className="submitbtn">
							<input type="submit" value="Send Message" />
						</div>
					</form>
					</div>
				</section>);
	}
}

export default Contact;
