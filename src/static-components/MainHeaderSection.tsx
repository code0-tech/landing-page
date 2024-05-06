import React from "react";
import {Header} from "@/components/Header/Header";
import {Badge, Button, Card, Text} from "@code0-tech/pictor";
import {IconBrandDiscord, IconMail} from "@tabler/icons-react";
import Image from "next/image";

export const MainHeaderSection: React.FC = () => {

    return <Header fh>
        <div style={{textAlign: "center"}}>
            <Badge color={"secondary"}>
                Join our Discord for early access
            </Badge>
            <h1 style={{marginTop: "1rem", color: "white", fontSize: "3rem"}}>Build <span
                style={{color: "#70ffb2"}}>complex backends</span> <br/>in no-time</h1>
            <Text mt={1} display={"block"} size={"md"}>
                The backend world gets to the next era with the code0 no-code platform.
                From database modelling to scalable backend endpoints in no-time all within our sleek and easy to use
                dashboard made for everyone.
                Everything is open source and with out Community Edition you can tryout our software locally.
            </Text>
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                <Button href={"https://discord.com/invite/vsMtqBBqC7"} color={"info"} mt={1} mr={1}>
                    <Button.Icon>
                        <IconBrandDiscord size={16}/>
                    </Button.Icon>
                    Join our discord for early access
                </Button>
                <Button href={"mailto:nsammito@code0.tech"} mt={1}>
                    <Button.Icon>
                        <IconMail size={16}/>
                    </Button.Icon>
                    Contact us via mail
                </Button>
            </div>

        </div>
        <Card pos={"relative"} mt={1} style={{aspectRatio: "16/9", transform: "perspective(100px) rotateX(1deg)"}}
              outline
              variant={"outlined"}>
            <Image src={"/code0_software.png"} alt={"Example image of code0 software"} layout='fill'
                   objectFit='contain'/>
        </Card>
    </Header>

}