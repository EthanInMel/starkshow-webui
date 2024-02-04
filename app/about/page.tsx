'use client';
import { title } from "@/components/primitives";
import { Link } from "@nextui-org/react";

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>About</h1>
			<p>This project is developed by 
				<Link href="https://twitter.com/EthanInMel">@EthanInMel</Link>
				</p>
		</div>
	);
}
