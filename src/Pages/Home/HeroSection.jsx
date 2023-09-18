import React from "react";

function HeroSection() {
	return (
		<section id="heroSection" className="hero--section">
			<div className="hero--section--content--box">
				<div className="hero--section--content">
					<p className="section--title">I'm Recep Yigiter</p>
					<h1 className="hero--section--title">
						<span className="hero--section-title--color">Full Stack</span>
						{" Java "}
						<br />
						Developer
					</h1>
					<p className="hero--section-description">
						As a full-stack developer, I specialize in building projects using
						Java's OOP concepts, Spring Framework, and Spring Security in a
						monolithic architecture. In addition, I have experience working on
						the frontend of projects using CSS, Bootstrap, JavaScript, and
						React. I am committed to meeting my clients' needs with tailor-made
						solutions that exceed their expectations.
						<br />
					</p>
				</div>
				<button className="btn btn-primary">Get In Touch</button>
			</div>
			<div className="hero--section--img">
				<img src="./img/herosection.jpg" alt="Hero Section" />
			</div>
		</section>
	);
}

export default HeroSection;
