'use client';
import NextLink from "next/link";
import { Link, Snippet, button as buttonStyles } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import events from '..//config/events';
import { EventCard, EventConfig } from "@/components/eventCard";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title({ color: "blue" })}>StarkShow&nbsp;</h1>
				<br />
				<h1 className={title()}>
					
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Showcase for Starknet projects and events.
				</h2>
			</div>

			{/* <div className="flex gap-3">
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing
					</span>
				</Snippet>
			</div> */}
			<div className="inline-block max-w-lg text-center justify-center mt-[100px] ">
				<h1 className={title({ color: "blue" })}>Upcoming Events</h1>
			</div>
			<div className="flex flex-col  w-4/6">
				<div className="mt-10 flex flex-row flex-wrap justify-between">
					{
						events.map(item => (
							<EventCard item={item as EventConfig} key={item.id}/>
						))
					}
				</div>
			</div>
		</section>
	);
}
