"use client";
import React from "react";
import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader, Divider, Link, Image } from "@nextui-org/react";
import cases from '../../config/projects';
import { ProjectCard } from "@/components/projectCard";

export default function ShowcasePage() {
	return (
		<div className="flex flex-col">
			<h1 className={title()} >Find a Project</h1>
			<div className={"mt-10 grid auto-rows-auto grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-2"}>
				{
					cases.map(item => (
						<ProjectCard item={item} key={item.id}/>
					))
				}
			</div>
		</div>
	);
}
