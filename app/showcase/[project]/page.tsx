"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader, Divider, Link, Image } from "@nextui-org/react";
import projects from '../../../config/projects';
import { ProjectCard, ProjectConfig } from "@/components/projectCard";
import { useTheme } from 'next-themes';
import Markdown from 'react-markdown';

export default function ShowcasePage({ params }: { params: { project: string } }) {
    const { theme, setTheme } = useTheme();
    const [details, setDetails] = useState("");

    const getProject = (): ProjectConfig => {
        let result: ProjectConfig = {} as ProjectConfig;
        projects.forEach(element => {
            if (element.id == params.project) {
                result = element;
            }
        })
        getData(result);
        return result;
    }

    async function getData(event: ProjectConfig) {
        const res = await fetch(event.description);
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
        if (!res.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error("Failed to fetch data");
        } else {
          setDetails(await res.text());
        }
      }

    const proj: ProjectConfig = useMemo(() => getProject()
        , []);


    return (
        <div className="flex flex-col items-center w-full">
            <Image
                alt="nextui logo"
                src={proj?.bgImage}
                removeWrapper
                radius='none'
                className='w-full max-h-[900px]'
            />
            <div className={'z-20 bottom-[15px] min-h-[120px] text-lg flex flex-col w-full pt-[20px] px-[20px] sm:px-[200px]'}>
                <div className="flex flex-col justify-between items-start w-full">
                    <p className="text-4xl font-bold">{proj.name}</p>
                    <p className={(theme == 'light' ? 'text-black/50' : 'text-white/50 ') + ' overflow-auto text-left'}>{proj.brief}</p>
                    <p className='mt-[5px]'>Category: {proj.category}</p>
                </div>
                <Divider className="my-2 h-[2px]" />
                <div className='flex flex-col itmes-start'>
                    <div className='flex flex-row items-center my-[60px]'>
                        <Image
                            alt="nextui logo"
                            src={"/images/arrow.png"}
                            width={60}
                            height={60}
                        />
                        <p className="text-4xl font-bold mx-[24px]">Details</p>
                        <span className='w-full border-none bg-[#dbdbdb] h-[2px]'></span>
                    </div>
                    <Markdown className='text-left'>{details}</Markdown>
                </div>

            </div>
        </div>
    );
}
