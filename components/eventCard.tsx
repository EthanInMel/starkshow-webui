"use client";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";

import { Logo } from "@/components/icons";
import { Button, Card, CardHeader, Input, Kbd, Link, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Navbar as NextUINavbar, Image, Divider, CardBody, CardFooter } from "@nextui-org/react";
import { FC } from "react";
import { useTheme } from "next-themes";
import { useRouter } from 'next/navigation'

export interface EventConfig {
    id: number
    name: string
    brief: string
    cardImage: string
    bgImage: string
    startDate: string,
    endDate: string,
    details: string,
    projectIds: [number]
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
        <div className={"w-[528px] h-[488px] rounded-3xl mt-10 " + (theme == 'light' ? 'bg-gray-100' : 'bg-[#343434]')} key={item.id} >
            <div className="flex relative m-[25px] rounded-2xl h-[270px] w-[480px]">
                <Image
                    alt="nextui logo"
                    src={item.cardImage}
                    width={480}
                />
                <div className={'absolute z-20 top-[15px] left-[19px] rounded-full border-1 min-w-[60px] text-lg ' + (theme == 'light' ? 'border-black' : '')}><span>{item.catagory}</span></div>
            </div>
            <div className="flex flex-row">
                <div className="w-[480px] m-auto">
                    <div className="flex flex-row items-center justify-between">
                        <div className={"flex flex-col items-start w-[340px] h-[160px] rounded p-4 text-left " + (theme == 'light' ? 'bg-[#58408f]' : 'bg-[#0C0D4E]')}  >
                            <p className="text-3xl font-semibold text-left">{item.name}</p>
                            <p className={(theme == 'light' ? 'text-black/50' : 'text-white/50 ') + ' overflow-auto'}>{item.brief}</p>
                        </div>

                        <div className="flex flex-col items-center justify-between h-[160px]">
                            <div className="w-[130px] h-[108px] bg-[#747474] p-2 text-left rounded ">
                                <Image
                                    alt="nextui logo"
                                    src={"/images/clock.svg"}
                                />
                                <p>{item.startDate}</p>
                                <p>→</p>
                                <p>{item.endDate}</p>
                            </div>
                            <Button variant="faded" onClick={() => router.push('/events/' + item.name)} className={(theme == 'light' ? 'bg-gray-100 ' : ' ') + "w-[130px] h-[42px]"}>
                                Learn more
                                <Image
                                    alt="nextui logo"
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
