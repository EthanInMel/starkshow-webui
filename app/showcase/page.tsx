"use client";
import React from "react";
import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader, Divider, Link, Image } from "@nextui-org/react";
import cases from '../../config/showcase';
import { ProjectCard } from "@/components/projectCard";

export default function ShowcasePage() {
	return (
		<div className="flex flex-col">
			<h1 className={title()} >Find a Project</h1>
			<div className="mt-10 flex flex-row flex-wrap justify-around">
				{
					cases.map(item => (
						<ProjectCard item={item} />
					))
				}
			</div>
		</div>
	);
}
