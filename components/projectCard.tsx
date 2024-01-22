"use client";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";

import { Button, Card, CardHeader, Input, Kbd, Link, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Navbar as NextUINavbar, Image, Divider, CardBody, CardFooter } from "@nextui-org/react";
import { FC } from "react";
import { useTheme } from "next-themes";
import { useRouter } from 'next/navigation'

export interface ProjectConfig {
    id: number
    name: string
    brief: string
    cardImage: string
    bgImage: string
    description: string,
    category: string,
    event: string
}

export interface projectCardProps {
    className?: string;
    item: ProjectConfig
}

export const ProjectCard: FC<projectCardProps> = ({
    item,
}) => {

    const { theme, setTheme } = useTheme();
    const router = useRouter();

    return (
        <div className={"w-[528px] h-[500px] rounded-3xl mt-10  mx-auto " + (theme == 'light' ? 'bg-gray-100' : 'bg-[rgba(255,255,255,0.15)]')} key={item.id} >
            <div className="flex relative m-[25px] rounded-2xl h-[270px] w-[480px]">
                <button onClick={() => router.push('/showcase/' + item.id)} className="w-full h-full">
                    <Image
                        alt="nextui logo"
                        src={item.cardImage}
                        width={480}
                    />
                </button>
                <div className={'absolute z-20 top-[15px] left-[19px] rounded-full border-1 min-w-[60px] text-lg ' + (theme == 'light' ? 'border-black' : '')}><span>{item.category}</span></div>
            </div>
            <div className="flex flex-col">
                <div className="w-[480px] m-auto">
                    <div className="flex flex-col items-center">
                        <p className="text-3xl font-semibold">{item.name}</p>
                        <p className={(theme == 'light' ? 'text-black/50' : 'text-white/50 ') + ' overflow-auto'}>{item.brief}</p>
                    </div>
                    <Divider className="my-2" />
                    <div className="flex flex-row items-center justify-between mt-[20px] bg-transparent">
                        <p>{item.event}</p>
                        <button onClick={() => router.push('/showcase/' + item.id)}>
                            <Image
                                alt="nextui logo"
                                src={"/images/go.svg"}
                            />
                        </button>

                    </div>
                </div>

            </div>

        </div>

    );
};
