import React from "react";
import {Header} from "@/components/Header/Header";
import {Badge, Button, Card, Col, Row, Text} from "@code0-tech/pictor";
import {IconBrandDiscord, IconCheck, IconMail} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export const MainHeaderSection: React.FC = () => {

    return <Header fh>
        <div style={{textAlign: "center"}}>
            <Badge color={"secondary"}>
                Join our Discord for early access
            </Badge>
            <h1 style={{marginTop: "1rem", color: "white", fontSize: "3rem"}}>Build <span
                style={{color: "#70ffb2"}}>complex backends</span> <br/>in no-time</h1>
            <Text mt={1} display={"block"} size={"md"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.</Text>
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                <Link href={""}>
                    <Button color={"info"} mt={1} mr={1}>
                        <Button.Icon>
                            <IconBrandDiscord size={16}/>
                        </Button.Icon>
                        Join our discord for early access
                    </Button>
                </Link>
                <Link href={""}>
                    <Button mt={1}>
                        <Button.Icon>
                            <IconMail size={16}/>
                        </Button.Icon>
                        Contact us via mail
                    </Button>
                </Link>
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