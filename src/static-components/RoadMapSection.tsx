import React from "react";
import {Badge, Card, Col, Container, Row, Text} from "@code0-tech/pictor";
import {Timeline} from "@/components/Timeline/Timeline";

export const RoadMapSection: React.FC = () => {
    return <Container mb={5}>
        <Row>
            <h1 style={{color: "white", fontSize: "3rem"}}>Backend revolution <br/>in a
                <span style={{color: "#70ffb2"}}> Roadmap</span></h1>
            <Text size={"md"} mt={1} mb={2} display={"block"} w={"100%"}>
                Good products need time. We will work hard to release it a soon and good as possible.
            </Text>
            <Timeline/>
            {
                [{
                    date: "August 2025",
                    title: "First test release",
                    description: "In the test release we will check the main functionality. Mainly its about the flow builder and the execution over REST.",
                }, {
                    date: "October 2025",
                    title: "First alpha release",
                    description: "In the alpha phase we will introduce more features, fix bugs and increase user experience",
                }, {
                    date: "December 2025",
                    title: "First beta release",
                    description: "Now its time for MQTT and AMQP support. The focus will be the extension of our adapters.",
                }, {
                    date: "2026",
                    title: "Full release self-hosted version",
                    description: "Everything is bundled and shipped for the first release of our community edition in a self-hosted environment.",
                }].map((item, index) => {
                    return <Col key={index} xs={12} lg={3} mt={1} pos={"relative"}>
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
                            {item.date}
                        </Badge>
                        <Card mt={1} mb={2} color={"primary"}>
                            <Card.Section display="flex" border style={{alignItems: "center"}}>
                                <Text size={"md"} hierarchy={"primary"}>{item.title}</Text>
                            </Card.Section>
                            <Card.Section>
                                <Text display={"block"} size={"xs"}>
                                    {item.description}
                                </Text>
                            </Card.Section>
                        </Card>
                    </Col>
                })
            }
        </Row>
    </Container>
}
