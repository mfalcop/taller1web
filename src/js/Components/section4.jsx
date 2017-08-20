
const React = require('react');

class Section4 extends React.Component {
	
	render() {
		return (<section className="sect4">
					<h2 className="mywork">My Work</h2>
					<p className="txt4">Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
					Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis
					arcu, id varius justo euismod in. Curabitur egestas consectetur magna vitae.</p>
					<div className="containerMywork">
						<div className="item">
							<a href="/fulls/01.jpg"><img src="/thumbs/01.jpg" title="The Anonymous Red" alt="" /></a>
						</div>
						<div className="item">
							<a href="/fulls/02.jpg"><img src="/thumbs/02.jpg" title="Airchitecture II" alt="" /></a>
						</div>
						<div className="item">
							<a href="/fulls/03.jpg"><img src="/thumbs/03.jpg" title="Air Lounge" alt="" /></a>
						</div>
						<div className="item">
							<a href="/fulls/04.jpg"><img src="/thumbs/04.jpg" title="Carry on" alt="" /></a>
						</div>
						<div className="item">
							<a href="/fulls/05.jpg"><img src="images/thumbs/05.jpg" title="The sparkling shell" alt="" /></a>
						</div>
						<div className="item">
							<a href="/fulls/06.jpg"><img src="/thumbs/06.jpg" title="Bent IX" alt="" /></a>
						</div>
					</div>
				</section>);
	}
}

export default Section4;
