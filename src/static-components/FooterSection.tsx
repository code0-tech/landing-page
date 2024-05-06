"use client"

import React from "react";
import {Col, Container, Row, Text} from "@code0-tech/pictor";
import Image from "next/image";
import {Header} from "@/components/Header/Header";
import {RoadMapSection} from "@/static-components/RoadMapSection";

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
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores
                        et ea rebum.
                    </Text>
                </Col>
                <Col xs={12} lg={2} mt={1}>
                    <Text size={"md"} hierarchy={"primary"}>
                        General
                    </Text>
                    <Text size={"md"} display={"block"} mt={1}>
                       Legal Notice
                    </Text>
                    <Text size={"md"} display={"block"} mt={1}>
                        Blog
                    </Text>
                </Col>
                <Col xs={12} lg={2} mt={1}>
                    <Text size={"md"} hierarchy={"primary"}>
                        Social media
                    </Text>
                    <Text size={"md"} display={"block"} mt={1}>
                        Instagram
                    </Text>
                    <Text size={"md"} display={"block"} mt={1}>
                        Discord
                    </Text>
                </Col>
                <Col xs={12} lg={2} mt={1}>
                    <Text size={"md"} hierarchy={"primary"}>
                        Social media
                    </Text>
                    <Text size={"md"} display={"block"} mt={1}>
                        Instagram
                    </Text>
                    <Text size={"md"} display={"block"} mt={1}>
                        Discord
                    </Text>
                </Col>
            </Row>
        </Container>
    </Header>
}