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

export interface EventConfig {
    id: string
    name: string
    brief: string
    cardImage: string
    bgImage: string
    startDate: string,
    endDate: string,
    details: string,
    projectIds: [string]
}

export interface EventCardProps {
    className?: string;
    item: EventConfig
}

export const EventCard: FC<EventCardProps> = ({
    item,
}) => {

    const { theme, setTheme } = useTheme();
    const router = useRouter();

    return (
        <div className={"w-[528px] h-[488px] rounded-3xl mt-10 mx-auto " + (theme == 'light' ? 'bg-gray-100' : 'bg-[rgba(255,255,255,0.15)]')} key={item.id} >
            <div className="flex relative m-[25px] rounded-2xl h-[270px] w-[480px]">
                <button onClick={() => router.push('/events/' + item.id)} className="w-full h-full">
                    <Image
                        alt="nextui logo"
                        src={item.cardImage}
                        width={480}
                    />
                </button>
            </div>
            <div className="flex flex-row">
                <div className="w-[480px] m-auto mb-[10px]">
                    <div className="flex flex-row items-center justify-between">
                        <div className={"flex flex-col items-start w-[340px] h-[160px] rounded p-4 text-left " + (theme == 'light' ? 'bg-[rgba(50,63,255,0.15)]' : 'bg-[#0C0D4E]')}  >
                            <p className="text-3xl font-semibold text-left">{item.name}</p>
                            <p className={(theme == 'light' ? 'text-black/50' : 'text-white/50 ') + ' overflow-auto'}>{item.brief}</p>
                        </div>

                        <div className="flex flex-col items-center justify-between h-[160px]">
                            <div className="w-[130px] h-[108px] bg-[rgba(255,255,255,0.25)] p-2 text-left rounded ">
                                <Image
                                    alt="nextui logo"
                                    src={"/images/clock.svg"}
                                />
                                <p>{item.startDate}</p>
                                <p>→</p>
                                <p>{item.endDate}</p>
                            </div>
                            <Button variant="faded" onClick={() => router.push('/events/' + item.id)} className={(theme == 'light' ? 'bg-[rgba(255,255,255,0.25)] ' : 'bg-[rgba(255,255,255,0.25)] ') + "w-[130px] h-[42px]"}>
                                Learn more
                                <Image
                                    src={"/images/go.svg"}
                                />
                            </Button>

                        </div>
                    </div>

                </div>

            </div>

        </div>

    );
};
