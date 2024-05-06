import React from "react";
import {Col, Container, Row, Text} from "@code0-tech/pictor";
import {FlowCard} from "@/components/FlowCard/FlowCard";

export const AdaptersSection: React.FC = () => {

    return <Container my={5}>
        <Row>
            <Col xs={12} lg={8}>
                <h1 style={{color: "white", fontSize: "3rem"}}>Planned <br/>
                    <span style={{color: "#70ffb2"}}>adapters </span> by us</h1>
                <Text size={"md"} mt={1} display={"block"}>
                    Adapters are the entry and trigger for the created flow. For the time being we are planning with three adapters.
                </Text>
                <ul>
                    <li>
                        <Text size={"lg"}>
                            REST adapter to create endpoints rapidly fast
                        </Text>
                    </li>
                    <li>
                        <Text size={"lg"}>
                            MQTT to subscribe to topics / events
                        </Text>
                    </li>
                    <li>
                        <Text size={"lg"}>
                            AMQP to receive messages from a queueing service
                        </Text>
                    </li>
                </ul>
            </Col>
            <Col xs={12} lg={4} mt={1}>
                <Row>
                    <Col sm={12}>
                        <FlowCard parameters badge={"TRIGGER"} color={"secondary"}
                                  title={"Representational State Transfer"}
                                  description={"Build REST endpoints in seconds with integrated database and easy to use algorithms"}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <FlowCard parameters badge={"TRIGGER"} color={"secondary"}
                                  title={"MQTT Subscribe to topic"}
                                  description={"Subscribe to a MQTT protocol emitting service and build flows based on message"}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <FlowCard parameters badge={"TRIGGER"} color={"secondary"}
                                  title={"AMQP Receive message"}
                                  description={"Receive messages trough a AMQP queueing service and build flows based on message"}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
}