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
						{/* <br /> */}
						Developer
					</h1>
					<p className="hero--section-description">
						&nbsp;&nbsp;&nbsp;{"   Hello, "} <br />
						&nbsp;&nbsp;&nbsp; I'm Full Stack Java Developer, specializing in
						both front-end and back-end development. I work tirelessly to ensure
						web applications run smoothly, are user-friendly, and perform at
						their best. <br />
						&nbsp;&nbsp;&nbsp; Front-End Development: I am an expert in creating
						interactive and dynamic user experiences with React, a
						JavaScript-based library. I use CSS to define styles and layouts,
						allowing users to navigate the interface easily and access the
						content they need.<br />
						&nbsp;&nbsp;&nbsp; Back-End Development: I have proficiency in
						Java-based back-end development and leverage Hibernate and Spring
						Boot to optimize database operations, enhance security, and maximize
						performance.<br />
						&nbsp;&nbsp;&nbsp; PL/SQL Developer: I have advanced expertise in Oracle
						PL/SQL. My skills include complex query optimization, stored
						procedures, and database performance tuning for seamless back-end
						operations in enterprise-level applications.<br />
						&nbsp;&nbsp;&nbsp; I am a team player,
						quick to adapt to new technologies, and approach problem-solving
						with creative solutions. I work diligently to manage project
						processes, improve code quality, and ensure customer satisfaction.
						<br />
						&nbsp;&nbsp;&nbsp;With my expertise, I am here to bring your projects to life in the
						best possible way. I look forward to discussing the details.<br />
						&nbsp;&nbsp;&nbsp; Best
						regards,
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
