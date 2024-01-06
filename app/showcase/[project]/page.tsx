"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader, Divider, Link, Image } from "@nextui-org/react";
import projects from '../../../config/projects';
import { ProjectCard, ProjectConfig } from "@/components/projectCard";
import { useTheme } from 'next-themes';

export default function ShowcasePage({ params }: { params: { project: string } }) {
    const { theme, setTheme } = useTheme();

    const getProject = (): ProjectConfig => {
        let result: ProjectConfig = {} as ProjectConfig;
        projects.forEach(element => {
            if (element.name == params.project) {
                result = element;
            }
        })
        return result;
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
                className='w-full'
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
                    <span className='text-left'>{proj.description}</span>
                </div>

            </div>
        </div>
    );
}
