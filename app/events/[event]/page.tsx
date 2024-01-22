"use client";
import React, { useEffect, useMemo, useState } from "react";
import { title } from "@/components/primitives";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import events from "../../../config/events";
import { ProjectCard, ProjectConfig } from "@/components/projectCard";
import { useTheme } from "next-themes";
import projects from "../../../config/projects";
import { EventConfig } from "@/components/eventCard";
import Markdown from "react-markdown";

export default function EventPage({ params }: { params: { event: string } }) {
  const { theme, setTheme } = useTheme();
  const [details, setDetails] = useState("");

  const getEvent = (): EventConfig => {
    let result: EventConfig = {} as EventConfig;
    events.forEach((element) => {
      if (element.id == params.event) {
        result = element as EventConfig;
      }
    });
    getData(result);
    return result;
  };

  const getProject = (id: string): ProjectConfig => {
    let result: ProjectConfig = {} as ProjectConfig;
    projects.forEach((element) => {
      if (element.id == id) {
        result = element;
      }
    });
    return result;
  };

  async function getData(event: EventConfig) {
    const res = await fetch(event.details);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    } else {
      setDetails(await res.text());
    }
  }

  const event: EventConfig = useMemo(() => getEvent(), []);

  const getProjects = (): ProjectConfig[] => {
    let projects: ProjectConfig[] = [];
    event.projectIds.forEach((id) => {
      projects.push(getProject(id));
    });
    return projects;
  };

  const projs: ProjectConfig[] = useMemo(() => getProjects(), []);

  return (
    <div className="flex flex-col  items-center w-full">
      <Image
        alt="nextui logo"
        src={event?.bgImage}
        removeWrapper
        radius="none"
        className="w-full"
      />
      <div
        className={
          "z-20 bottom-[15px] min-h-[120px] text-lg flex flex-col w-full pt-[20px] px-[20px] sm:px-[200px]"
        }
      >
        <div className="flex flex-col justify-between items-start w-full">
          <p className="text-4xl font-bold">{event.name}</p>
          <p
            className={
              (theme == "light" ? "text-black/50" : "text-white/50 ") +
              " overflow-auto"
            }
          >
            {event.brief}
          </p>
          <div className="flex flex-row min-w-[234px] justify-between items-center">
            <Image alt="nextui logo" src={"/images/clock.svg"} />
            <span className="font-semibold my-[10px]">
              {event.startDate} → {event.endDate}
            </span>
          </div>
        </div>
        <Divider className="my-2 h-[2px]" />

        <div className="flex flex-col itmes-start my-[60px]">
          <div className="flex flex-row items-center my-[60px]">
            <Image
              alt="nextui logo"
              src={"/images/arrow.png"}
              width={60}
              height={60}
            />
            <p className="text-4xl font-bold mx-[24px]">Details</p>
            <span className="w-full border-none bg-[#dbdbdb] h-[2px]"></span>
          </div>
          <Markdown className={""}>{details}</Markdown>
        </div>
        <div className="flex flex-col itmes-start">
          <div className="flex flex-row items-center my-[60px]">
            <Image
              alt="nextui logo"
              src={"/images/arrow.png"}
              width={60}
              height={60}
            />
            <p className="text-4xl font-bold mx-[24px]">Projects</p>
            <span className="w-full border-none bg-[#dbdbdb] h-[2px]"></span>
          </div>
          <div
            className={
              "mt-10 grid auto-rows-auto grid-cols-1 lg:grid-cols-2"
            }
          >
            {projs.map((item) => (
              <ProjectCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
