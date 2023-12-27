"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader, Divider, Link, Image } from "@nextui-org/react";
import events from '../../../config/events';
import { ProjectCard } from "@/components/projectCard";
import { useTheme } from 'next-themes';
import projects from '../../../config/projects';
import { EventConfig } from '@/components/eventCard';

export default function EventPage({ params }: { params: { event: string } }) {
    const { theme, setTheme } = useTheme();

    const getEvent = () => {
        let one;
        events.forEach(element => {
            if (element.name == params.event) {
                one = element;
            }
        })
        return one;
    }

    const getProject = (id: number) => {
        let one;
        projects.forEach(element => {
            if (element.id == id) {
                one = element;
            }
        })
        return one;
    }

    const event: EventConfig = useMemo(() => getEvent()
        , []);

    const getProjects = () => {
        let projects = [];
        event.projectIds.forEach(id => {
            projects.push(getProject(id));
        })
        return projects;
    }

    const projs: [] = useMemo(() => getProjects()
        , []);


    return (
        <div className="flex flex-col  items-center w-full">
            <Image
                alt="nextui logo"
                src={event?.bgImage}
                removeWrapper
                radius='none'
                className='w-full'
            />
            <div className={'z-20 bottom-[15px] min-h-[120px] text-lg flex flex-col w-full pt-[20px]'}>
                <div className="flex flex-col justify-between items-start w-full">
                    <p className="text-4xl font-bold">{event.name}</p>
                    <p className={(theme == 'light' ? 'text-black/50' : 'text-white/50 ') + ' overflow-auto'}>{event.brief}</p>
                    <div className='flex flex-row min-w-[234px] justify-between items-center'>
                        <Image
                            alt="nextui logo"
                            src={"/images/clock.svg"}
                        />
                        <span className='font-semibold my-[10px]'>{event.startDate} → {event.endDate}</span>
                    </div>

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
                        <p className="text-4xl font-bold mx-[24px]">Projects</p>
                        <span className='w-full border-none bg-[#dbdbdb] h-[2px]'></span>
                    </div>
                    <div className="flex flex-row flex-wrap justify-between">
                        {
                            projs.map(item => (
                                <ProjectCard item={item} />
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col itmes-start my-[60px]'>
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
                    <span className='text-left'>{event.details}</span>
                </div>

            </div>
        </div>
    );
}
