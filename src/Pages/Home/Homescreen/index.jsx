import React from "react";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

function Home() {
	return (
		<>
			<HeroSection />
			<MySkills/>
			<MyPortfolio/>
			<AboutMe/>
			<Testimonial/>
			<ContactMe/>
			<Footer/>
		</>
	);
}

export default Home;
