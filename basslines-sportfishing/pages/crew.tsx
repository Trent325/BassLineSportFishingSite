import {NextPage} from "next";
import styles from "../styles/meetTheCrew.module.scss";
import Header from "../components/Header";
import Crew from "../components/Crew";
import CrewIntro from "../components/CrewIntro";
import Crew2 from "../components/Crew2";
import Footer from "../components/Footer";


const meetTheCrew: NextPage =() => {
	return (
		<div>
			<Header/>
				<title>Meet The Crew| BassLines Sport Fishing</title>
			<main>
				<CrewIntro/>
				<Crew/>
				<Crew2/>
				
			</main>
			<Footer/>
			
		</div>
	)
};

export default meetTheCrew;
