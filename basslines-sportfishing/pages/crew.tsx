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
