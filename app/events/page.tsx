"use client";
import React from "react";
import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader, Divider, Link, Image } from "@nextui-org/react";
import events from '../../config/events';
import { EventCard, EventConfig } from "@/components/eventCard";

export default function ShowcasePage() {
	return (
		<div className="flex flex-col">
			<h1 className={title()} >Events</h1>
			<div className={"mt-10 grid auto-rows-auto grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-2"}>
				{
					events.map(item => (
						<EventCard item={item as EventConfig} key={item.id} />
					))
				}
			</div>
		</div>
	);
}
