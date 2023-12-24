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

export interface projectCardProps {
    className?: string;
    item: {}
}

export const ProjectCard: FC<projectCardProps> = ({
    item,
}) => {

    const { theme, setTheme } = useTheme();
    const router = useRouter();

    return (
        <div className={"w-[528px] h-[500px] rounded-3xl mt-10 " + (theme == 'light' ? 'bg-gray-100' : 'bg-[#343434]')} key={item.id} >
            <div className="flex relative m-[25px] rounded-2xl h-[270px] w-[480px]">
                <Image
                    alt="nextui logo"
                    src={item.cardImage}
                    width={480}
                />
                <div className={'absolute z-20 top-[15px] left-[19px] rounded-full border-1 min-w-[60px] text-lg ' + (theme == 'light' ? 'border-black' : '')}><span>{item.catagory}</span></div>
            </div>
            <div className="flex flex-col mt-10">
                <div className="w-[480px] m-auto">
                    <div className="flex flex-col items-center">
                        <p className="text-3xl font-semibold">{item.name}</p>
                        <p className={theme == 'light' ? 'text-black/50' : 'text-white/50'}>{item.brief}</p>
                    </div>
                    <Divider className="my-2" />
                    <div className="flex flex-row items-center justify-between">
                        <Image
                            alt="nextui logo"
                            src={"images/clock.svg"}
                        />
                        <p>{item.event}</p>
                        <Button isIconOnly variant="faded" onClick={() => router.push('/showcase/' + item.name)}>
                            <Image
                                alt="nextui logo"
                                src={"images/go.svg"}
                            />
                        </Button>

                    </div>
                </div>

            </div>

        </div>

    );
};
