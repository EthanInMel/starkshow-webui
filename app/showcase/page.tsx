"use client";
import React from "react";
import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader, Divider, Link, Image } from "@nextui-org/react";
import cases from '../../config/showcase';

export default function ShowcasePage() {
	return (
		<div className="flex flex-col items-center">
			<h1 className={title()} >Find a Project</h1>
			<div className="mt-10 flex flex-row justify-around w-4/5">
				{
					cases.map(item => (
						<Card className="max-w-[400px]">
							<CardHeader className="flex gap-3">
								<Image
									alt="nextui logo"
									height={300}
									radius="sm"
									src={item.image}
									width={400}
								/>
							</CardHeader>
							<Divider />
							<CardBody>
								<div className="flex flex-col">
									<p className="text-md">{item.name}</p>
									<p>{item.brief}</p>
								</div>
							</CardBody>
							<Divider />
							<CardFooter>
								<p>{item.event}</p>
							</CardFooter>
						</Card>
					))
				}
			</div>
		</div>
	);
}
