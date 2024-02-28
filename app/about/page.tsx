'use client';
import { title } from "@/components/primitives";
import { Link } from "@nextui-org/react";

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>About</h1>
			<p>This project is developed by <br></br>
				<Link href="https://twitter.com/EthanInMel"> &nbsp; @EthanInMel (DEV) </Link> <br></br>
				<Link href="https://twitter.com/EmpireofIris"> &nbsp; @EmpireofIris (UI) </Link> <br></br>
				<Link href="https://twitter.com/Real_Maxlion"> &nbsp; @Real_Maxlion (Marketing) </Link>
				
				</p>
		</div>
	);
}
