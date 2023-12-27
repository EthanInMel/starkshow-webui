"use client";
import React from "react";
import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader, Divider, Link, Image } from "@nextui-org/react";
import events from '../../config/events';
import { EventCard } from "@/components/eventCard";

export default function ShowcasePage() {
	return (
		<div className="flex flex-col">
			<h1 className={title()} >Events</h1>
			<div className="mt-10 flex flex-row flex-wrap justify-around">
				{
					events.map(item => (
						<EventCard item={item} />
					))
				}
			</div>
		</div>
	);
}
