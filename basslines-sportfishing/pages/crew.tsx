import {NextPage} from "next";
import styles from "../styles/meetTheCrew.module.scss";
import Header from "../components/Header";
import Crew from "../components/Crew";

const meetTheCrew: NextPage =() => {
	return (
		<div>
			<Header/>
			<main>
				<Crew/>
			</main>
		</div>
	)
};

export default meetTheCrew;
