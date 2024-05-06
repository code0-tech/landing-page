import React from "react";
import {Badge, Card, Col, Container, Row, Text} from "@code0-tech/pictor";
import {Timeline} from "@/components/Timeline/Timeline";

export const RoadMapSection: React.FC = () => {
    return <Container mb={5}>
        <Row>
            <h1 style={{color: "white", fontSize: "3rem"}}>Backend revolution <br/>in a
                <span style={{color: "#70ffb2"}}> Roadmap</span></h1>
            <Text size={"md"} mt={1} mb={2} display={"block"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum.
            </Text>
            <Timeline/>
            {
                [1, 2, 3, 4].map((item, index) => {
                    return <Col key={item} xs={12} lg={3} mt={1} pos={"relative"}>
                        <div style={{
                            width: "0.5rem",
                            height: "0.5rem",
                            borderRadius: "50rem",
                            border: "1px solid #70ffb2",
                            background: "#030014",
                            position: "absolute",
                            left: "50%",
                            top: "-1.25rem",
                            transform: "translateX(-50%)"
                        }}/>
                        <Badge left={"50%"} style={{transform: "translateX(-50%)"}} mr={1} color={"info"}>
                            Oktober 2024
                        </Badge>
                        <Card mt={1} mb={2} color={"primary"}>
                            <Card.Section display="flex" border style={{alignItems: "center"}}>
                                <Text size={"md"} hierarchy={"primary"}>Test Release</Text>
                            </Card.Section>
                            <Card.Section>
                                <Text display={"block"} size={"xs"}>Lorem ipsum dolor sit amet, consetetur sadipscing
                                    elitr, sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Text>
                            </Card.Section>
                        </Card>
                    </Col>
                })
            }
        </Row>
    </Container>
}