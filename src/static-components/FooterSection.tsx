"use client"

import React from "react";
import {Col, Container, Row, Text} from "@code0-tech/pictor";
import Image from "next/image";
import {Header} from "@/components/Header/Header";
import {RoadMapSection} from "@/static-components/RoadMapSection";
import Link from "next/link";

export const FooterSection: React.FC = () => {
    return <Header>
        <RoadMapSection/>
        <Container>
            <Image src={"/code0_logo.png"} alt={"Code0 Logo"} width={50} height={50}/>
            <Text size={"md"} display={"block"} hierarchy={"primary"} mt={1}>
                2024-present Code0 Technology
            </Text>
            <Row>
                <Col xs={12} lg={6} mt={1}>
                    <Text size={"md"} display={"block"}>
                        The backend world gets to the next era with the code0 no-code platform.
                        From database modelling to scalable backend endpoints in no-time all within our sleek and easy
                        to use
                        dashboard made for everyone.
                        Everything is open source and with out Community Edition you can tryout our software locally.
                    </Text>
                </Col>
                <Col xs={12} lg={2} mt={1}>
                    <Text size={"md"} hierarchy={"primary"}>
                        General
                    </Text>
                    <Link href={"/legal-notice"} style={{textDecoration: "none"}}>
                        <Text size={"md"} display={"block"} mt={1}>
                            Legal Notice
                        </Text>
                    </Link>
                </Col>
                <Col xs={12} lg={2} mt={1}>
                    <Text size={"md"} hierarchy={"primary"}>
                        Social media
                    </Text>
                    <Link href={"https://instagram.com/code0.tech"} style={{textDecoration: "none"}}>
                        <Text size={"md"} display={"block"} mt={1}>
                            Instagram
                        </Text>
                    </Link>
                    <Link href={"https://discord.com/invite/vsMtqBBqC7"} style={{textDecoration: "none"}}>
                        <Text size={"md"} display={"block"} mt={1}>
                            Discord
                        </Text>
                    </Link>
                </Col>
                <Col xs={12} lg={2} mt={1}>
                    <Text size={"md"} hierarchy={"primary"}>
                        Others
                    </Text>
                    <Link href={"https://github.com/code0-tech"} style={{textDecoration: "none"}}>
                        <Text size={"md"} display={"block"} mt={1}>
                            Github
                        </Text>
                    </Link>
                </Col>
            </Row>
        </Container>
    </Header>
}