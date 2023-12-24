"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader, Divider, Link, Image } from "@nextui-org/react";
import cases from '../../../config/showcase';
import { ProjectCard } from "@/components/projectCard";

export default function ShowcasePage({ params }: { params: { project: string } }) {

    const getProject = () => {
        let one;
        cases.forEach(element => {
            if (element.name == params.project) {
                one = element;
            }
        })
        return one;
    }

    const proj: { bgImage: string } = useMemo(() => getProject()
        , []);


    return (
        <div className="flex flex-col">
            <Image
                alt="nextui logo"
                src={proj?.bgImage}
                removeWrapper
                radius='none'
            />

        </div>
    );
}
